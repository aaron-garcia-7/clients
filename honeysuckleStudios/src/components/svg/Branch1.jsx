import React from 'react'
import styled from 'styled-components'

const Branch1 = ({giveId}) => {
  return (
    <ScBranch1 id={giveId ? "branch1" : null}>
        <svg viewBox="0 0 579 1142" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M339 1140C298.714 1053.51 269.852 964.711 251.912 876.5M440.5 99.5C415.657 122.832 392.907 148.604 372.304 176.5M440.5 99.5C430.978 49.88 443.902 29.007 501 5C490.592 65.1219 477.202 85.5184 440.5 99.5ZM251.912 876.5C226.5 813 192 826 163.5 812.5C175 862.5 211 862.5 251.912 876.5ZM251.912 876.5C244.592 840.502 239.09 804.603 235.374 769M235.374 769C219.575 761.245 195.883 701.576 176.014 579.5M235.374 769C213.335 557.871 254.071 357.15 350.5 208.041M160 457.501C164.828 503.57 170.26 544.151 176.014 579.5M160 457.501C231.5 393 170.5 374.5 200.5 320C157.781 336.402 140 393 160 457.501ZM160 457.501C138 393 102 410 77.5 368C66.5 446 125 434.5 160 457.501ZM176.014 579.5C120 481 73 469.812 6 486.449M176.014 579.5C48 579.5 56.5 521.5 6 486.449M176.014 579.5C129.032 535.337 91.5688 515.037 6 486.449M350.5 208.041C526 263.5 505 186.5 572.5 182M350.5 208.041C436.5 140.5 534.5 145 572.5 182M350.5 208.041C459.743 174.483 508.277 168.784 572.5 182M350.5 208.041C357.477 197.252 364.746 186.733 372.304 176.5M372.304 176.5C342.342 131.108 341.199 106.873 368 66C370 129.5 399.5 130 372.304 176.5Z" stroke="#EFA0A0" strokeWidth="10" className="svg-elem-1"></path>
        </svg>
    </ScBranch1>
  )
}

const ScBranch1 = styled('div')`
    svg {
        width: 8rem;
    }

/***************************************************
 * Generated by SVG Artista on 9/1/2022, 9:39:18 AM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

@-webkit-keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 4039.17822265625px;
    stroke-dasharray: 4039.17822265625px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 4039.17822265625px;
  }
}

@keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 4039.17822265625px;
    stroke-dasharray: 4039.17822265625px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 4039.17822265625px;
  }
}

.svg-elem-1 {
  -webkit-animation: animate-svg-stroke-1 6s cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s both;
          animation: animate-svg-stroke-1 6s cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s both;
}

`

export default Branch1