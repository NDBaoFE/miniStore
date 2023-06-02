import { styled } from "styled-components";
import { themes } from "../../utils/theme";
import { Menu } from "antd";
export const Container = styled.div`
    .ant-btn-primary {
        background-color: ${themes.colors.primary};
        &:hover {
            background-color: ${themes.colors.primaryDark};
        }
    }
    .ant-btn-primary:not(:disabled):active {
        background-color: ${themes.colors.primaryDark};
    }
    .ant-btn:not(:disabled):focus-visible {
        outline: 4px solid ${themes.colors.primaryDark};
    }
    button:hover {
        border-color: ${themes.colors.primary};
    }
    button:focus,
    button:focus-visible {
        outline: none;
    }
`;
export const StyledMenu = styled(Menu)`
    .ant-layout-sider {
        background-color: #ffffff;
    }

    .ant-menu-submenu-title > .ant-menu-title-content {
        &:hover {
            color: black;
            background-color: ${themes.colors.primary};
        }
    }

    .ant-menu-light .ant-menu-item:hover {
        color: ${themes.colors.white};
    }
    .ant-menu-light .ant-menu-submenu-title:hover,
    .ant-menu-light .ant-menu-submenu-active {
        color: ${themes.colors.white};
    }
    .ant-menu {
        background-color: ${themes.colors.background};
        text-align: center;
        &-item {
            color: ${themes.colors.primary};

            span {
                color: ${themes.colors.primary};
            }

            &-active {
                color: ${themes.colors.white};
            }
            &:hover {
                color: ${themes.colors.white} !important;
                background-color: ${themes.colors.primary} !important;
                a {
                    color: ${themes.colors.black} !important;
                }
                span {
                    color: ${themes.colors.white};
                }
            }
            &.ant-menu-submenu-selected {
                color: ${themes.colors.white};
            }
            &-selected {
                color: ${themes.colors.white};
                background-color: ${themes.colors.primary};

                & .ant-menu-title-content a {
                    color: ${themes.colors.white};
                }
            }
            &-title {
                &:hover {
                    color: ${themes.colors.white};
                }
            }
            .ant-menu-item-icon {
                color: ${themes.colors.primary};
                /* min-width: 0; */
            }
        }

        &-submenu {
            &-selected {
                & > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
                    color: ${themes.colors.white};
                }
                color: ${themes.colors.white};
            }
            &-arrow {
                color: ${themes.colors.light};
            }
            &:hover {
                & > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
                    color: ${themes.colors.white};
                }
                & > .ant-menu-submenu-title > .ant-menu-title-content {
                    color: ${themes.colors.white};
                }
            }

            &-title {
                &:hover {
                    color: ${themes.colors.white};
                }
            }
            color: ${themes.colors.light};
        }
        &-submenu a {
            color: ${themes.colors.light};
            &:hover {
                color: ${themes.colors.white};
            }
        }
        &-inline {
            border: none;
            & .ant-menu-item::after {
                border-right: 3px solid ${themes.colors.primary};
            }
        }
    }
    .ant-menu-item {
        &:hover {
            background-color: ${themes.colors.background};
        }
    }
    .ant-menu-item-selected {
        box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
        border-radius: 8px;
        color: ${themes.colors.white}!important;
        span {
            color: ${themes.colors.white}!important;
        }
    }
    .ant-menu-inline-collapsed .ant-menu-item-selected {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ant-menu-inline-collapsed .ant-menu-item {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ant-menu-inline-collapsed > .ant-menu-item,
    .ant-menu-inline-collapsed
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item,
    .ant-menu-inline-collapsed
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title,
    .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
        padding-inline: 0;
    }
    .ant-menu-inline .ant-menu-item:not(:last-child),
    .ant-menu-vertical .ant-menu-item:not(:last-child) {
        margin-bottom: 30px;
    }
    .ant-menu-inline .ant-menu-item,
    .ant-menu-vertical .ant-menu-item {
        margin: 0 auto;
    }
    .ant-menu-inline-collapsed > .ant-menu-item .ant-menu-item-icon + span,
    .ant-menu-inline-collapsed
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item
        .ant-menu-item-icon
        + span,
    .ant-menu-inline-collapsed
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .ant-menu-item-icon
        + span,
    .ant-menu-inline-collapsed
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .ant-menu-item-icon
        + span,
    .ant-menu-inline-collapsed > .ant-menu-item .anticon + span,
    .ant-menu-inline-collapsed
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item
        .anticon
        + span,
    .ant-menu-inline-collapsed
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .anticon
        + span,
    .ant-menu-inline-collapsed
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .anticon
        + span {
        display: none;
    }
`;
