import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.a`
  -moz-box-shadow:inset 0px 0px 5px -2px #54a3f7;
	-webkit-box-shadow:inset 0px 0px 5px -2px #54a3f7;
	box-shadow:inset 0px 0px 5px -2px #54a3f7;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #007dc1), color-stop(1, #0061a7));
	background:-moz-linear-gradient(top, #007dc1 5%, #0061a7 100%);
	background:-webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%);
	background:-o-linear-gradient(top, #007dc1 5%, #0061a7 100%);
	background:-ms-linear-gradient(top, #007dc1 5%, #0061a7 100%);
	background:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0);
	background-color:#007dc1;
	-moz-border-radius:5px;
	-webkit-border-radius:5px;
	border-radius:5px;
	border:2px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:18px;
	padding:12px 41px;
	text-decoration:none;
	text-shadow:0px 1px 0px #154682;
	margin-right: 20px;
	
	&:hover {
	  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0061a7), color-stop(1, #007dc1));
    background:-moz-linear-gradient(top, #0061a7 5%, #007dc1 100%);
    background:-webkit-linear-gradient(top, #0061a7 5%, #007dc1 100%);
    background:-o-linear-gradient(top, #0061a7 5%, #007dc1 100%);
    background:-ms-linear-gradient(top, #0061a7 5%, #007dc1 100%);
    background:linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0061a7', endColorstr='#007dc1',GradientType=0);
    background-color:#0061a7;
	}
	
	&:active {
	  position:relative;
	  top:1px;
	}
`

const Button = props => {
  return (
    <ButtonWrapper className={`button`} href={props.href} target={`_blank`}>{props.text}</ButtonWrapper>
  )
}

export default Button