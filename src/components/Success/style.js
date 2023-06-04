import { styled } from "styled-components";
import { themes } from "../../utils/theme";
export const Container = styled.div`
    position: fixed;
    left: 0;
    width: 100vw;
    top: 0;
    height: 100vw;
    background-color: ${themes.colors.shadow};
    .check-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 12.5rem;
        height: 15rem;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-between;
        transition: 0.3s all ease;
        .check-background {
            width: 100%;
            height: calc(100% - 1.25rem);
            background: linear-gradient(to bottom right, #5de593, #41d67c);
            box-shadow: 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset,
                0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
            transform: scale(0.84);
            border-radius: 50%;
            animation: animateContainer 0.75s ease-out forwards 0.75s;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;

            svg {
                width: 65%;
                transform: translateY(0.25rem);
                stroke-dasharray: 80;
                stroke-dashoffset: 80;
                animation: animateCheck 0.35s forwards 1.25s ease-out;
            }
        }

        .check-shadow {
            bottom: calc(-15% - 5px);
            left: 0;
            border-radius: 50%;
            background: radial-gradient(
                closest-side,
                rgba(73, 218, 131, 1),
                transparent
            );
            animation: animateShadow 0.75s ease-out forwards 0.75s;
        }
    }

    @keyframes animateContainer {
        0% {
            opacity: 0;
            transform: scale(0);
            box-shadow: 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset,
                0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
        }
        25% {
            opacity: 1;
            transform: scale(0.9);
            box-shadow: 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset,
                0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
        }
        43.75% {
            transform: scale(1.15);
            box-shadow: 0px 0px 0px 43.334px rgba(255, 255, 255, 0.25) inset,
                0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
        }
        62.5% {
            transform: scale(1);
            box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset,
                0px 0px 0px 21.667px rgba(255, 255, 255, 0.25) inset;
        }
        81.25% {
            box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset,
                0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset;
        }
        100% {
            opacity: 1;
            box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset,
                0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset;
        }
    }

    @keyframes animateCheck {
        from {
            stroke-dashoffset: 80;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes animateShadow {
        0% {
            opacity: 0;
            width: 100%;
            height: 15%;
        }
        25% {
            opacity: 0.25;
        }
        43.75% {
            width: 40%;
            height: 7%;
            opacity: 0.35;
        }
        100% {
            width: 85%;
            height: 15%;
            opacity: 0.25;
        }
    }
`;
