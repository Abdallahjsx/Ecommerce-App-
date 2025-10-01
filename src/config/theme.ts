'use client';
//You can use the custom typography variants directly with MUI’s <Typography> component, for example:

// <Typography variant="titleLarge">Your text here</Typography>
// <Typography variant="bodyMedium">Some body text</Typography>


//All variants (titleLarge, titleMedium, bodyLarge, etc.) are defined in the theme. For more details,
//  check the MUI Typography documentation

import { createTheme} from '@mui/material/styles';
import { TokensColorType } from '@/types';
declare module '@mui/material/styles' {
  interface Theme {
   tokens:TokensColorType;
  }
  interface ThemeOptions{
    tokens:TokensColorType;
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    titleLarge: React.CSSProperties;
    titleMedium: React.CSSProperties;
    titleSmall: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    captionLarge: React.CSSProperties;
    captionMedium: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleLarge?: React.CSSProperties;
    titleMedium?: React.CSSProperties;
    titleSmall?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    captionLarge?: React.CSSProperties;
    captionMedium?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleLarge: true;
    titleMedium: true;
    titleSmall: true;
    bodyLarge: true;
    bodyMedium: true;
    captionLarge: true;
    captionMedium: true;
  }
}
export const theme = createTheme({
 palette:{
    primary:{
        main:"#1B2351"
    },
    secondary:{
        main:"#47C0D2"
    },
    info:{
        main:"#136EBF", 
    },
    success:{
        main:"#10B981",
        
    },
    warning:{
        main:"#F59E0B"
    },
    error:{
        main:"#EF4444"
    },
 },
 tokens:{
    mainColors:{
        primary:"#1B2351",
        secondary:"#47C0D2",
        white:"#FEFEFE",
        black:"#000814"
    },
    backgroundColors:{
        main:"#F6F3EC",
        light:"#F5F5F5",
        heavy:"#50546E",
        bottomSheet:"#FFFFFF",
        success:"#EDFFF6",
        info:"#DDEEFD",
        warning:"#FEF3C7",
        danger:"#FEE2E2",
        uploadBg:"#EBEBEB"
    },
    typographyColors:{
        title:"#383644",
        subtitle:"#535456",
        body:"#30343C",
        hint:"#ABADB6",
        link:"#3E548D",
        success:"#10B981",
        info:"#136EBF",
        warning:"#F59E0B",
        danger:"#EF4444",
        secondary:"#FE6239",
        inactive:"#919193"
    },
    buttonsColors:{
        primary:"#1B2351",
        secondary:"#47C0D2",
        label:"#666666",
        bgInactive:"#EBEBEB",
        primaryHover:"#4D26A0",
        primaryPressed:"#000C53",
        primaryDisabled:"#838AB2",
        secondaryHover:"#3BB0C1",
        secondaryPressed:"#CC482A",
        secondaryDisabled:"#9FDDE6"
    },
    inputsColors: {
    background: "#ffffff",
    border: "#D0D5DD",
    label: "#6F7073",
    placeholder: "#667085",
    inactiveText: "#98A1B2",
  },iconsColors: {
    primary: "#1B2351",
    secondary: "#47C0D2",
    light: "#CDD5DF",
    gray: "#6F7073",
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
  },
  separatingColors: {
    border: "#D0D5DD",
    separator: "#D2D3D4",
  }
    
},
typography:{
     fontFamily: 'Poppins,Inter,Cinzel_Decorative',
     titleLarge:{
        fontFamily:"var(--font-poppins)",
        fontSize:36,
        fontWeight:700,
        lineHeight:1.2
     },
      titleMedium:{
        fontFamily:"var(--font-poppins)",
        fontSize:28,
        fontWeight:600,
        lineHeight:1.2
     },
     titleSmall:{
        fontFamily:"var(--font-poppins)",
        fontSize:24,
        fontWeight:600,
        lineHeight:1.2
     },
     bodyLarge:{
        fontFamily:"var(--font-poppins)",
        fontSize:32,
        fontWeight:700,
        lineHeight:1.2
     },
     bodyMedium:{
        fontFamily:"var(--font-poppins)",
        fontSize:24,
        fontWeight:600,
        lineHeight:1.2
     },
     captionLarge:{
        fontFamily:"var(--font-poppins)",
        fontSize:24,
        fontWeight:700,
        lineHeight:1.2
     },
     captionMedium:{
        fontFamily:"var(--font-poppins)",
        fontSize:12,
        fontWeight:600,
        lineHeight:1.2
     }
    
    
   
}
 

});