import React, { Component } from 'react'
import '../stylesheet/logo.css'

const LogoPage = () => (
    <div className="blocks">
    <svg id="logoSvg" width="357" height="123" viewBox="0 0 357 123" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62.0241 0.991997V48.032C62.0241 54.56 60.1361 59.648 56.3601 63.296C52.5841 66.88 47.5281 68.672 41.1921 68.672C34.7921 68.672 29.6081 66.816 25.6401 63.104C21.7361 59.392 19.7841 54.208 19.7841 47.552H33.2241C33.2881 50.432 33.9601 52.672 35.2401 54.272C36.5841 55.872 38.5041 56.672 41.0001 56.672C43.4321 56.672 45.2881 55.904 46.5681 54.368C47.8481 52.832 48.4881 50.72 48.4881 48.032V0.991997H62.0241Z" stroke="#64FFDA"/>
        <path d="M127.91 14.816V68H114.374V61.28C112.646 63.584 110.374 65.408 107.558 66.752C104.806 68.032 101.798 68.672 98.5341 68.672C94.3741 68.672 90.6941 67.808 87.4941 66.08C84.2941 64.288 81.7661 61.696 79.9101 58.304C78.1181 54.848 77.2221 50.752 77.2221 46.016V14.816H90.6621V44.096C90.6621 48.32 91.7181 51.584 93.8301 53.888C95.9421 56.128 98.8221 57.248 102.47 57.248C106.182 57.248 109.094 56.128 111.206 53.888C113.318 51.584 114.374 48.32 114.374 44.096V14.816H127.91Z" stroke="#64FFDA"/>
        <path d="M170.643 14.048C176.979 14.048 182.099 16.064 186.003 20.096C189.907 24.064 191.859 29.632 191.859 36.8V68H178.419V38.624C178.419 34.4 177.363 31.168 175.251 28.928C173.139 26.624 170.259 25.472 166.611 25.472C162.899 25.472 159.955 26.624 157.779 28.928C155.667 31.168 154.611 34.4 154.611 38.624V68H141.171V14.816H154.611V21.44C156.403 19.136 158.675 17.344 161.427 16.064C164.243 14.72 167.315 14.048 170.643 14.048Z" stroke="#64FFDA"/>
        <path d="M269.399 0.991997V48.032C269.399 54.56 267.511 59.648 263.735 63.296C259.959 66.88 254.903 68.672 248.567 68.672C242.167 68.672 236.983 66.816 233.015 63.104C229.111 59.392 227.159 54.208 227.159 47.552H240.599C240.663 50.432 241.335 52.672 242.615 54.272C243.959 55.872 245.879 56.672 248.375 56.672C250.807 56.672 252.663 55.904 253.943 54.368C255.223 52.832 255.863 50.72 255.863 48.032V0.991997H269.399Z" stroke="#64FFDA"/>
        <path d="M308.693 68.864C303.573 68.864 298.965 67.744 294.869 65.504C290.773 63.2 287.541 59.968 285.173 55.808C282.869 51.648 281.717 46.848 281.717 41.408C281.717 35.968 282.901 31.168 285.269 27.008C287.701 22.848 290.997 19.648 295.157 17.408C299.317 15.104 303.957 13.952 309.077 13.952C314.197 13.952 318.837 15.104 322.997 17.408C327.157 19.648 330.421 22.848 332.789 27.008C335.221 31.168 336.437 35.968 336.437 41.408C336.437 46.848 335.189 51.648 332.693 55.808C330.261 59.968 326.933 63.2 322.709 65.504C318.549 67.744 313.877 68.864 308.693 68.864ZM308.693 57.344C311.125 57.344 313.397 56.736 315.509 55.52C317.685 54.304 319.413 52.512 320.693 50.144C321.973 47.712 322.613 44.8 322.613 41.408C322.613 38.016 321.973 35.136 320.693 32.768C319.413 30.336 317.717 28.512 315.605 27.296C313.557 26.08 311.317 25.472 308.885 25.472C305.109 25.472 301.909 26.88 299.285 29.696C296.661 32.448 295.349 36.352 295.349 41.408C295.349 46.464 296.629 50.4 299.189 53.216C301.749 55.968 304.917 57.344 308.693 57.344Z" stroke="#64FFDA"/>
        <path d="M10.8128 111.28C8.97282 111.28 7.34615 110.96 5.93282 110.32C4.54615 109.68 3.45282 108.787 2.65282 107.64C1.85282 106.493 1.42615 105.213 1.37282 103.8H4.33282C4.46615 105.187 5.06615 106.4 6.13282 107.44C7.19948 108.48 8.75949 109 10.8128 109C12.7062 109 14.1995 108.507 15.2928 107.52C16.4128 106.507 16.9728 105.253 16.9728 103.76C16.9728 102.56 16.6662 101.6 16.0528 100.88C15.4395 100.133 14.6795 99.5867 13.7728 99.24C12.8662 98.8667 11.6128 98.4667 10.0128 98.04C8.14615 97.5333 6.66615 97.04 5.57282 96.56C4.47949 96.08 3.54615 95.3333 2.77282 94.32C1.99948 93.3067 1.61282 91.9333 1.61282 90.2C1.61282 88.76 1.98615 87.48 2.73282 86.36C3.47948 85.2133 4.53282 84.32 5.89282 83.68C7.25282 83.04 8.81282 82.72 10.5728 82.72C13.1595 82.72 15.2395 83.36 16.8128 84.64C18.4128 85.8933 19.3328 87.52 19.5728 89.52H16.5328C16.3462 88.3467 15.7195 87.3067 14.6528 86.4C13.5862 85.4933 12.1462 85.04 10.3328 85.04C8.65282 85.04 7.25282 85.4933 6.13282 86.4C5.01282 87.3067 4.45282 88.5467 4.45282 90.12C4.45282 91.2933 4.75948 92.24 5.37282 92.96C5.98615 93.68 6.74615 94.2267 7.65282 94.6C8.58615 94.9733 9.83949 95.3733 11.4128 95.8C13.2262 96.3067 14.6928 96.8133 15.8128 97.32C16.9328 97.8 17.8795 98.5467 18.6528 99.56C19.4262 100.573 19.8128 101.933 19.8128 103.64C19.8128 104.947 19.4662 106.187 18.7728 107.36C18.0795 108.533 17.0528 109.48 15.6928 110.2C14.3328 110.92 12.7062 111.28 10.8128 111.28Z" stroke="#64FFDA"/>
        <path d="M34.7834 111.32C32.7301 111.32 30.8768 110.867 29.2234 109.96C27.5968 109.027 26.3034 107.72 25.3434 106.04C24.4101 104.333 23.9434 102.347 23.9434 100.08C23.9434 97.8133 24.4234 95.84 25.3834 94.16C26.3434 92.4533 27.6501 91.1467 29.3034 90.24C30.9568 89.3067 32.8101 88.84 34.8634 88.84C36.9168 88.84 38.7701 89.3067 40.4234 90.24C42.1034 91.1467 43.4101 92.4533 44.3434 94.16C45.3034 95.84 45.7834 97.8133 45.7834 100.08C45.7834 102.32 45.3034 104.293 44.3434 106C43.3834 107.707 42.0634 109.027 40.3834 109.96C38.7034 110.867 36.8368 111.32 34.7834 111.32ZM34.7834 108.96C36.2234 108.96 37.5568 108.627 38.7834 107.96C40.0101 107.293 40.9968 106.293 41.7434 104.96C42.5168 103.627 42.9034 102 42.9034 100.08C42.9034 98.16 42.5301 96.5333 41.7834 95.2C41.0368 93.8667 40.0501 92.88 38.8234 92.24C37.5968 91.5733 36.2634 91.24 34.8234 91.24C33.3834 91.24 32.0501 91.5733 30.8234 92.24C29.5968 92.88 28.6101 93.8667 27.8634 95.2C27.1434 96.5333 26.7834 98.16 26.7834 100.08C26.7834 102 27.1434 103.627 27.8634 104.96C28.6101 106.293 29.5834 107.293 30.7834 107.96C32.0101 108.627 33.3434 108.96 34.7834 108.96Z" stroke="#64FFDA"/>
        <path d="M59.4875 91.52H54.4075V111H51.6075V91.52H48.5675V89.16H51.6075V87.64C51.6075 85.2667 52.2075 83.52 53.4075 82.4C54.6342 81.28 56.6075 80.72 59.3275 80.72V83.12C57.5142 83.12 56.2342 83.4667 55.4875 84.16C54.7675 84.8533 54.4075 86.0133 54.4075 87.64V89.16H59.4875V91.52Z" stroke="#64FFDA"/>
        <path d="M67.5353 91.52V105.08C67.5353 106.413 67.7887 107.333 68.2953 107.84C68.802 108.347 69.6953 108.6 70.9753 108.6H73.5353V111H70.5353C68.562 111 67.0953 110.547 66.1353 109.64C65.1753 108.707 64.6953 107.187 64.6953 105.08V91.52H61.6553V89.16H64.6953V83.68H67.5353V89.16H73.5353V91.52H67.5353Z" stroke="#64FFDA"/>
        <path d="M106.5 89.5L99.66 111.34H96.86L90.82 94.02L84.78 111.34H81.94L75.1 89.5H77.98L83.38 106.38L89.46 89.5H92.34L98.3 106.5L103.7 89.5H106.5Z" stroke="#64FFDA"/>
        <path d="M109.49 100.04C109.49 97.8 109.93 95.84 110.81 94.16C111.717 92.4533 112.957 91.1467 114.53 90.24C116.13 89.3067 117.93 88.84 119.93 88.84C122.01 88.84 123.797 89.32 125.29 90.28C126.81 91.24 127.904 92.4667 128.57 93.96V89.16H131.37V111H128.57V106.16C127.877 107.653 126.77 108.893 125.25 109.88C123.757 110.84 121.97 111.32 119.89 111.32C117.917 111.32 116.13 110.853 114.53 109.92C112.957 108.987 111.717 107.667 110.81 105.96C109.93 104.253 109.49 102.28 109.49 100.04ZM128.57 100.08C128.57 98.32 128.21 96.7733 127.49 95.44C126.77 94.1067 125.784 93.08 124.53 92.36C123.304 91.64 121.944 91.28 120.45 91.28C118.904 91.28 117.517 91.6267 116.29 92.32C115.064 93.0133 114.09 94.0267 113.37 95.36C112.677 96.6667 112.33 98.2267 112.33 100.04C112.33 101.827 112.677 103.4 113.37 104.76C114.09 106.093 115.064 107.12 116.29 107.84C117.517 108.533 118.904 108.88 120.45 108.88C121.944 108.88 123.304 108.52 124.53 107.8C125.784 107.08 126.77 106.053 127.49 104.72C128.21 103.387 128.57 101.84 128.57 100.08Z" stroke="#64FFDA"/>
        <path d="M140.562 93.48C141.176 91.9867 142.109 90.8267 143.363 90C144.643 89.1733 146.202 88.76 148.042 88.76V91.68H147.283C145.256 91.68 143.629 92.2267 142.402 93.32C141.176 94.4133 140.562 96.24 140.562 98.8V111H137.762V89.16H140.562V93.48Z" stroke="#64FFDA"/>
        <path d="M172.015 98.92C172.015 99.8533 171.988 100.573 171.935 101.08H153.815C153.868 102.733 154.255 104.16 154.975 105.36C155.721 106.533 156.681 107.427 157.855 108.04C159.028 108.653 160.308 108.96 161.695 108.96C163.508 108.96 165.028 108.52 166.255 107.64C167.508 106.76 168.335 105.573 168.735 104.08H171.695C171.161 106.213 170.015 107.96 168.255 109.32C166.521 110.653 164.335 111.32 161.695 111.32C159.641 111.32 157.801 110.867 156.175 109.96C154.548 109.027 153.268 107.72 152.335 106.04C151.428 104.333 150.975 102.347 150.975 100.08C150.975 97.8133 151.428 95.8267 152.335 94.12C153.241 92.4133 154.508 91.1067 156.135 90.2C157.761 89.2933 159.615 88.84 161.695 88.84C163.775 88.84 165.588 89.2933 167.135 90.2C168.708 91.08 169.908 92.2933 170.735 93.84C171.588 95.3867 172.015 97.08 172.015 98.92ZM169.175 99C169.201 97.3467 168.868 95.9333 168.175 94.76C167.508 93.5867 166.588 92.7067 165.415 92.12C164.241 91.5333 162.961 91.24 161.575 91.24C160.215 91.24 158.961 91.5333 157.815 92.12C156.668 92.7067 155.735 93.5867 155.015 94.76C154.295 95.9333 153.895 97.3467 153.815 99H169.175Z" stroke="#64FFDA"/>
        <path d="M191.734 85.24V95.8H202.334V98.04H191.734V108.76H203.534V111H188.934V83H203.534V85.24H191.734Z" stroke="#64FFDA"/>
        <path d="M219.292 88.76C221.905 88.76 224.038 89.5733 225.692 91.2C227.345 92.8 228.172 95.1333 228.172 98.2V111H225.412V98.52C225.412 96.1467 224.812 94.3333 223.612 93.08C222.438 91.8267 220.825 91.2 218.772 91.2C216.665 91.2 214.985 91.8667 213.732 93.2C212.478 94.5333 211.852 96.4933 211.852 99.08V111H209.052V89.16H211.852V92.88C212.545 91.5467 213.545 90.5333 214.852 89.84C216.158 89.12 217.638 88.76 219.292 88.76Z" stroke="#64FFDA"/>
        <path d="M243.524 88.84C245.577 88.84 247.364 89.32 248.884 90.28C250.404 91.24 251.497 92.4533 252.164 93.92V89.16H254.964V111.56C254.964 113.56 254.524 115.333 253.644 116.88C252.791 118.427 251.591 119.613 250.044 120.44C248.497 121.293 246.737 121.72 244.764 121.72C241.964 121.72 239.631 121.053 237.764 119.72C235.924 118.387 234.777 116.573 234.324 114.28H237.084C237.564 115.8 238.471 117.013 239.804 117.92C241.164 118.827 242.817 119.28 244.764 119.28C246.177 119.28 247.444 118.973 248.564 118.36C249.684 117.773 250.564 116.893 251.204 115.72C251.844 114.547 252.164 113.16 252.164 111.56V106.16C251.471 107.653 250.364 108.893 248.844 109.88C247.351 110.84 245.577 111.32 243.524 111.32C241.524 111.32 239.724 110.853 238.124 109.92C236.551 108.987 235.311 107.667 234.404 105.96C233.524 104.253 233.084 102.28 233.084 100.04C233.084 97.8 233.524 95.84 234.404 94.16C235.311 92.4533 236.551 91.1467 238.124 90.24C239.724 89.3067 241.524 88.84 243.524 88.84ZM252.164 100.08C252.164 98.32 251.804 96.7733 251.084 95.44C250.364 94.1067 249.377 93.08 248.124 92.36C246.897 91.64 245.537 91.28 244.044 91.28C242.497 91.28 241.111 91.6267 239.884 92.32C238.657 93.0133 237.684 94.0267 236.964 95.36C236.271 96.6667 235.924 98.2267 235.924 100.04C235.924 101.827 236.271 103.4 236.964 104.76C237.684 106.093 238.657 107.12 239.884 107.84C241.111 108.533 242.497 108.88 244.044 108.88C245.537 108.88 246.897 108.52 248.124 107.8C249.377 107.08 250.364 106.053 251.084 104.72C251.804 103.387 252.164 101.84 252.164 100.08Z" stroke="#64FFDA"/>
        <path d="M262.756 85.04C262.196 85.04 261.716 84.84 261.316 84.44C260.916 84.04 260.716 83.5467 260.716 82.96C260.716 82.3733 260.916 81.8933 261.316 81.52C261.716 81.12 262.196 80.92 262.756 80.92C263.316 80.92 263.796 81.12 264.196 81.52C264.596 81.8933 264.796 82.3733 264.796 82.96C264.796 83.5467 264.596 84.04 264.196 84.44C263.796 84.84 263.316 85.04 262.756 85.04ZM264.156 89.16V111H261.356V89.16H264.156Z" stroke="#64FFDA"/>
        <path d="M280.737 88.76C283.35 88.76 285.484 89.5733 287.137 91.2C288.79 92.8 289.617 95.1333 289.617 98.2V111H286.857V98.52C286.857 96.1467 286.257 94.3333 285.057 93.08C283.884 91.8267 282.27 91.2 280.217 91.2C278.11 91.2 276.43 91.8667 275.177 93.2C273.924 94.5333 273.297 96.4933 273.297 99.08V111H270.497V89.16H273.297V92.88C273.99 91.5467 274.99 90.5333 276.297 89.84C277.604 89.12 279.084 88.76 280.737 88.76Z" stroke="#64FFDA"/>
        <path d="M315.569 98.92C315.569 99.8533 315.543 100.573 315.489 101.08H297.369C297.423 102.733 297.809 104.16 298.529 105.36C299.276 106.533 300.236 107.427 301.409 108.04C302.583 108.653 303.863 108.96 305.249 108.96C307.063 108.96 308.583 108.52 309.809 107.64C311.063 106.76 311.889 105.573 312.289 104.08H315.249C314.716 106.213 313.569 107.96 311.809 109.32C310.076 110.653 307.889 111.32 305.249 111.32C303.196 111.32 301.356 110.867 299.729 109.96C298.103 109.027 296.823 107.72 295.889 106.04C294.983 104.333 294.529 102.347 294.529 100.08C294.529 97.8133 294.983 95.8267 295.889 94.12C296.796 92.4133 298.063 91.1067 299.689 90.2C301.316 89.2933 303.169 88.84 305.249 88.84C307.329 88.84 309.143 89.2933 310.689 90.2C312.263 91.08 313.463 92.2933 314.289 93.84C315.143 95.3867 315.569 97.08 315.569 98.92ZM312.729 99C312.756 97.3467 312.423 95.9333 311.729 94.76C311.063 93.5867 310.143 92.7067 308.969 92.12C307.796 91.5333 306.516 91.24 305.129 91.24C303.769 91.24 302.516 91.5333 301.369 92.12C300.223 92.7067 299.289 93.5867 298.569 94.76C297.849 95.9333 297.449 97.3467 297.369 99H312.729Z" stroke="#64FFDA"/>
        <path d="M340.452 98.92C340.452 99.8533 340.426 100.573 340.372 101.08H322.252C322.306 102.733 322.692 104.16 323.412 105.36C324.159 106.533 325.119 107.427 326.292 108.04C327.466 108.653 328.746 108.96 330.132 108.96C331.946 108.96 333.466 108.52 334.692 107.64C335.946 106.76 336.772 105.573 337.172 104.08H340.132C339.599 106.213 338.452 107.96 336.692 109.32C334.959 110.653 332.772 111.32 330.132 111.32C328.079 111.32 326.239 110.867 324.612 109.96C322.986 109.027 321.706 107.72 320.772 106.04C319.866 104.333 319.412 102.347 319.412 100.08C319.412 97.8133 319.866 95.8267 320.772 94.12C321.679 92.4133 322.946 91.1067 324.572 90.2C326.199 89.2933 328.052 88.84 330.132 88.84C332.212 88.84 334.026 89.2933 335.572 90.2C337.146 91.08 338.346 92.2933 339.172 93.84C340.026 95.3867 340.452 97.08 340.452 98.92ZM337.612 99C337.639 97.3467 337.306 95.9333 336.612 94.76C335.946 93.5867 335.026 92.7067 333.852 92.12C332.679 91.5333 331.399 91.24 330.012 91.24C328.652 91.24 327.399 91.5333 326.252 92.12C325.106 92.7067 324.172 93.5867 323.452 94.76C322.732 95.9333 322.332 97.3467 322.252 99H337.612Z" stroke="#64FFDA"/>
        <path d="M348.375 93.48C348.988 91.9867 349.922 90.8267 351.175 90C352.455 89.1733 354.015 88.76 355.855 88.76V91.68H355.095C353.068 91.68 351.442 92.2267 350.215 93.32C348.988 94.4133 348.375 96.24 348.375 98.8V111H345.575V89.16H348.375V93.48Z" stroke="#64FFDA"/>
    </svg>
    </div>
)




export default LogoPage
