"use client";
import * as signalR from "@microsoft/signalr";
import { useEffect, useState } from "react";
import { getUserIdFromToken } from "./helpers/getData";
import { useAppSelector } from "@/Redux/store";


export default function useSignalRConnection() {
  const token = useAppSelector((state) => state.auth.token);
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
    useEffect(() => {
        if (!token) return;

        const userId = getUserIdFromToken(token);
        console.log("Connecting to SignalR for userId:", userId);

        const connection = new signalR.HubConnectionBuilder()
            .withUrl(`https://dev.api.alluvo.life/notificationHub?userId=${userId}`, {
                accessTokenFactory: () => token,
            // i skipped the negotiation to avoid the cors issues on the /    negotiate POST request
            // this requires using websockets only
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Information)
            .build();

        setConnection(connection);

        return () => {
            if (connection) {
                connection.stop();
            }
        };
    }, [token]);
    return connection;
}