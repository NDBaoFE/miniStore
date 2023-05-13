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
    font-size: 16px;
    line-height: 24px;
    color: #45ce7c;
    height: 32px;
    margin: 20px 0;
`;

export const Wrapper = styled.div`
    font-family: "Nunito Sans", sans-serif;
    .ant-layout-sider {
        background-color: ${themes.colors.background};
    }

    .ant-menu-submenu-title > .ant-menu-title-content {
        &:hover {
            color: "white";
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

        &-sub {
            &.ant-menu-inline {
                background: ${themes.colors.submenu};
            }
        }

        &-item {
            color: ${themes.colors.light};
            &-active {
                color: ${themes.colors.white};
            }
            &:hover {
                color: ${themes.colors.white} !important;
                background-color: ${themes.colors.primary} !important;
                a {
                    color: ${themes.colors.white} !important;
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
        }

        &-item a {
            color: #ffffff;
            &:hover {
                color: ${themes.colors.white};
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
    border: none;
    cursor: pointer;
`;
export const Button = styled.button`
    background: transparent;
    border: none;

    svg {
        transform: ${(props) =>
            props.collapsed === true ? "scale(-1, -1);" : "none"};
        transition: transform 0.2s, -webkit-transform 0.2s;
    }
    svg path {
        stroke: white;
    }
    svg g {
        stroke: rgba(128, 129, 145, 0.7);
        path {
            stroke: rgba(128, 129, 145, 0.7);
        }
    }
    svg g path:nth-child(2) {
        opacity: 0.6;
    }
`;
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
