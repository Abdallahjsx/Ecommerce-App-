import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@/Redux/store';
import { setMainCategory } from '@/Redux/slices/shopFiltersSlice';
import { mainCategoryType } from '@/features/shop/types';




export default function MenuElement<T>({ children, options, value, onSelect, getId, getLabel, sortOrder, sortBy }: { children: React.ReactNode, options: T[], value: string | undefined, onSelect: (item: T) => void, getId: (item: T) => string, getLabel: (item: T) => string, sortOrder?: string, sortBy?: string }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const t = useTheme()
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleChoose = (index: number) => {
        onSelect(options[index])
        handleClose()
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <Box onClick={handleClick}>
                {children}
            </Box>

            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableScrollLock={true}
                slotProps={{
                    paper: {
                        sx: {
                            // maxHeight: ITEM_HEIGHT * 4.5,
                            width: 'fit-content',
                            bgcolor: t.tokens.backgroundColors.main,
                        },
                    },
                    list: {
                        'aria-labelledby': 'long-button',
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={getId(option)}
                        selected={getId(option) === value || getLabel(option) === value}
                        onClick={() => {
                            handleChoose(index)
                        }}
                        sx={{
                            borderLeft: '6px solid transparent',
                            fontFamily: t.typography.bodyMedium.fontFamily,
                            fontWeight: t.typography.bodyMedium.fontWeight,
                            fontSize: t.typography.bodyMedium.fontSize,
                            '&:hover': {
                                bgcolor: '#1B23510F',
                            },
                            '&.Mui-selected': {
                                bgcolor: '#1B23511F',
                                borderLeft: '6px solid #1B2351',
                                '&:hover': {
                                    bgcolor: '#1B23512F',
                                }
                            }
                        }}
                    >
                        {getLabel(option)}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
