import { motion } from "framer-motion";

const { default: styled } = require("styled-components");

export const Button =styled(motion.button)`
color:#ffffff;
border-radius:10px;
width:100px;
height:50px;
background-color:black;
transition: all 0.5s;
&:hover {
    background-color:white;
    color:black;
    border:2px solid black;
}
`
