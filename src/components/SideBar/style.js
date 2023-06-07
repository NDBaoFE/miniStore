import { Layout } from "antd";
import styled from "styled-components";

import { themes } from "../../utils/theme/index";

const { Sider } = Layout;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 24px;
    color: #45ce7c;
    height: 32px;
    margin: 20px 0;
`;

export const Wrapper = styled.div`
    font-family: "Nunito Sans", sans-serif;
    @media (max-width: 992px) {
        display: none;
    }

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
                svg {
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
        span,
        svg {
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
export const SideBar = styled(Sider)`
    /* min-width: 200px; */
    font-family: "Nunito Sans", sans-serif;
    position: fixed !important;
    min-height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    .ant-menu {
        font-size: 16px;
    }
`;

export const SignOut = styled.button`
    display: flex;
    align-items: center;
    font-family: "Nunito Sans", sans-serif;
    color: rgba(255, 255, 255, 0.85);
    position: absolute;
    bottom: 20px;
    padding-left: 24px;
    background-color: transparent;
    color:green;
    border: none;
    cursor: pointer;
`;
export const Button = styled.button`
    background: transparent;
    border: none;
    border-color: transparent;
    &:hover {
        border-color: none;
    }
    &:focus {
        border-color: none;
    }
    svg {
        transform: ${(props) =>
            props.collapsed === true ? "scale(-1, -1);" : "none"};
        transition: transform 0.2s, -webkit-transform 0.2s;
    }
`;
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
