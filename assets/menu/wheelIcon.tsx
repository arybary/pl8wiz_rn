import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const WheelIcon = (props: SvgProps) => (
  <Svg {...props} viewBox="0 0 1280 1280">
    <Path d="M607 104.6c-31 2.5-48.1 4.7-72.5 9.5-70.5 13.8-140.8 43.8-201 85.9-107.7 75.1-183.6 186.1-214.9 314-5.1 21.1-9.7 48.1-12.8 76.5-1.8 16.3-1.8 82.7 0 99 8 72.4 24.4 129.9 54.3 189.5 27.2 54.3 59.4 98.9 101.8 141 42 41.7 85.9 73.2 139.1 99.8 53.4 26.8 108.5 43.7 167.5 51.6 26.4 3.6 35.7 4.1 71.5 4.1s45.1-.5 71.5-4.1c102.9-13.8 199.2-57.1 279-125.6 15.3-13.1 42.1-39.9 55.4-55.3 67.5-78.6 111.4-175.3 125-275.5 4.3-31.5 4.6-36.1 4.6-75 0-39.8-.4-46.1-5-78-12.7-88.4-47.7-172-102.5-244.9-69.8-92.8-168.8-160.8-281-193-24.4-7-54.7-13.2-78.5-16-4.9-.6-13-1.6-18-2.2-8.6-1-74.1-2.1-83.5-1.3zm21.8 95.1c-1.5.2-4.2.2-6 0-1.8-.2-.6-.4 2.7-.4 3.3 0 4.8.2 3.3.4zm29 0c-1.5.2-4.2.2-6 0-1.8-.2-.6-.4 2.7-.4 3.3 0 4.8.2 3.3.4zm-45.5 1c-.7.2-2.1.2-3 0-1-.3-.4-.5 1.2-.5 1.7 0 2.4.2 1.8.5zm59 0c-.7.2-2.1.2-3 0-1-.3-.4-.5 1.2-.5 1.7 0 2.4.2 1.8.5zm-75.6.9c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm91 0c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-97 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm103 0c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-113 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm123 0c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zM432 251.5c0 .2-1 .9-2.2 1.5-2.2 1.1-2.2 1-.4-.4 2.1-1.7 2.6-1.9 2.6-1.1zm420 2.1c0 .2-.9 0-2-.6s-2-1.3-2-1.6c0-.2.9 0 2 .6s2 1.3 2 1.6zm-429 2.9c0 .2-1 .9-2.2 1.5-2.2 1.1-2.2 1-.4-.4 2.1-1.7 2.6-1.9 2.6-1.1zm438 2.1c0 .2-.9 0-2-.6s-2-1.3-2-1.6c0-.2.9 0 2 .6s2 1.3 2 1.6zm-219.2 44.6c.7 19.4 1.7 49.2 2.2 66.3.5 17 1.4 46.1 2 64.5.6 18.4 1.5 46.3 2 62 .5 15.7 1.2 38.1 1.6 49.8.4 11.7 1 21 1.5 20.5 1.3-1.3 6.6-23 8.9-35.8 3-17.8 5.7-39.3 8.5-70.5 6.2-68.5 6.7-72.9 10.7-98.5 7-45.2 18.3-71.3 35.7-82.4 7.1-4.6 17.4-6.6 26.6-5 19.6 3.2 61.2 20.5 90.5 37.7 23.6 13.7 33.9 22.5 38.8 33 2.4 5.1 2.7 6.8 2.6 16.2 0 9.4-.4 11.4-3.3 18.6-5.5 14.1-15.5 29.2-31.7 48-8.9 10.2-40.6 42-84.1 84.2-30 29-45.3 45.4-56.9 60.7-7.1 9.3-9.4 13.2-7.1 11.8 1.9-1 53.5-39.5 132.7-98.8 34.5-25.9 71.2-53.3 81.6-60.9 10.4-7.7 20.4-15.1 22.2-16.4 1.7-1.3 3.2-2 3.1-1.6-.1 1.1-9 8.9-93.4 80.5-107.7 91.4-134.4 114.3-134 114.7.8.8 20.9-8.4 34-15.5 18.5-10 34.3-19.9 80-50 43.7-28.7 58.4-37.8 78-47.8 25.7-13.2 40.7-17.8 57.5-17.8 14.1 0 20.2 2.3 28.5 10.7 7.3 7.3 10.5 13.7 17.5 34.1 14.9 44 22.9 97.7 17.1 114.8-4.4 12.7-13.6 21.1-28.6 26.1-12.3 4.2-20.1 5.1-46.5 5.1-29.3-.1-41.6-1.2-102-9.5-58.3-8-70-9.2-99.5-9.6l-26-.4-.7-8.8c-1.9-24.2-17.3-46.9-39.4-58-10.6-5.3-17.1-6.7-32.4-6.7-15.3 0-21.8 1.4-32.4 6.7-22.1 11.1-37.5 33.8-39.4 58l-.7 8.8-26 .4c-29.5.4-41.2 1.6-99.5 9.6-60.4 8.3-72.7 9.4-102 9.5-26.4 0-34.2-.9-46.5-5.1-15.1-5-25.2-14.4-29-27-5.3-17.3 3.1-71.5 17.5-113.9 7.1-20.9 10.2-26.9 17.4-34.1 8.5-8.4 14.5-10.7 28.6-10.7 16.8 0 31.8 4.6 57.5 17.8 18.9 9.7 36.2 20.3 79.5 48.8 44.1 29 60.1 39 78.5 49 13.1 7.2 33.2 16.3 34 15.5.4-.4-44.3-38.6-156.5-133.8-63.9-54.3-70.8-60.2-70.9-61.3-.1-1.2 20 13.7 118.4 87.4 62.1 46.5 119.4 89.2 121.3 90.3 2.1 1.3.2-1.8-6.7-11.2-11-14.9-27-31.9-57.4-61.4-81.7-79.1-100.2-99.7-112.2-124.3-5.9-12-7.8-20-7.3-29.5.8-14 7.4-23.7 23.6-34.8 32.1-21.8 83.1-44.8 109.2-49.2 5.3-.9 8-.8 13.9.4 13.4 2.8 23.6 11.9 31.6 28.1 12 24.5 18.1 57 24.5 130.5 4.5 51.5 6.7 71 10.5 94.1 2.5 15 8 37.8 9.4 39.2.5.5 1.1-9 1.5-21 .4-12 1.1-34.2 1.6-49.3.5-15.1 1.4-43 2-62 4.1-132.9 5.2-166 6-166 .3 0 1.2 15.9 1.8 35.2zM391 276.4c0 .3-1.5 1.4-3.2 2.6l-3.3 2.2 3-2.6c3.1-2.7 3.5-2.9 3.5-2.2zm504 4.2c0 .3-1.3-.4-3-1.6-1.6-1.2-3-2.4-3-2.6 0-.3 1.4.4 3 1.6 1.7 1.2 3 2.4 3 2.6zm-514 2.8c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm520.1 1.3c1.3 1.6 1.2 1.7-.3.4-1-.7-1.8-1.5-1.8-1.7 0-.8.8-.3 2.1 1.3zM377 286.4c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm528.1 1.3c1.3 1.6 1.2 1.7-.3.4-1-.7-1.8-1.5-1.8-1.7 0-.8.8-.3 2.1 1.3zM373 289.4c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm-5 4c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm552 6.3c0 .2-1.8-1-4-2.7-2.2-1.7-4-3.4-4-3.7 0-.2 1.8 1 4 2.7 2.2 1.7 4 3.4 4 3.7zm-556-3.4c0 .2-1.2 1.4-2.7 2.8l-2.8 2.4 2.4-2.8c2.3-2.5 3.1-3.2 3.1-2.4zm-6 5c0 .2-1.2 1.4-2.7 2.8l-2.8 2.4 2.4-2.8c2.3-2.5 3.1-3.2 3.1-2.4zm567 2.2c1.3 1.4 2.1 2.5 1.8 2.5-.2 0-1.5-1.1-2.8-2.5-1.3-1.4-2.1-2.5-1.8-2.5.2 0 1.5 1.1 2.8 2.5zm-574 3.8c0 .2-1.5 1.6-3.2 3.3l-3.3 2.9 2.9-3.3c2.8-3 3.6-3.7 3.6-2.9zm581.6 2.9 2.9 3.3-3.2-2.9c-3.1-2.8-3.8-3.6-3-3.6.2 0 1.6 1.5 3.3 3.2zM343 314.3c0 .1-6.6 6.7-14.7 14.7l-14.8 14.5 14.5-14.8c13.4-13.7 15-15.2 15-14.4zm609 14.2c8 8 14.2 14.5 14 14.5-.3 0-7-6.5-15-14.5S936.8 314 937 314c.3 0 7 6.5 15 14.5zm-639 16.8c0 .2-1.5 1.6-3.2 3.3l-3.3 2.9 2.9-3.3c2.8-3 3.6-3.7 3.6-2.9zm657.6 2.9 2.9 3.3-3.2-2.9c-3.1-2.8-3.8-3.6-3-3.6.2 0 1.6 1.5 3.3 3.2zM306 353.3c0 .2-1.2 1.4-2.7 2.8l-2.8 2.4 2.4-2.8c2.3-2.5 3.1-3.2 3.1-2.4zm671 2.2c1.3 1.4 2.1 2.5 1.8 2.5-.2 0-1.5-1.1-2.8-2.5-1.3-1.4-2.1-2.5-1.8-2.5.2 0 1.5 1.1 2.8 2.5zm-677 4.9c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm682.1 1.3c1.3 1.6 1.2 1.7-.3.4-1-.7-1.8-1.5-1.8-1.7 0-.8.8-.3 2.1 1.3zM296 365.4c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm690.1 1.3c1.3 1.6 1.2 1.7-.3.4-1-.7-1.8-1.5-1.8-1.7 0-.8.8-.3 2.1 1.3zM292 370.4c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm698.1 1.3c1.3 1.6 1.2 1.7-.3.4-1-.7-1.8-1.5-1.8-1.7 0-.8.8-.3 2.1 1.3zM289 374.4c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm704.1 1.3c1.3 1.6 1.2 1.7-.3.4-1-.7-1.8-1.5-1.8-1.7 0-.8.8-.3 2.1 1.3zM286 378.4c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm-5 7c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm720.1 1.3c1.3 1.6 1.2 1.7-.3.4-1-.7-1.8-1.5-1.8-1.7 0-.8.8-.3 2.1 1.3zM253 430c-.6 1.1-1.3 2-1.6 2-.2 0 0-.9.6-2s1.3-2 1.6-2c.2 0 0 .9-.6 2zm-12.9 25.3c-1 .9-1.1.8-.5-.6.3-1 .9-1.5 1.2-1.2.3.3 0 1.1-.7 1.8zm800.3-.7c.3.8.2 1.2-.4.9-.6-.3-1-1-1-1.6 0-1.4.7-1.1 1.4.7zM204.7 574.2c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm871 0c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm1 5c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm-874 10c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm875 0c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm-876 6c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm877 0c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm-878 16.5c-.3 1-.5.4-.5-1.2 0-1.7.2-2.4.5-1.8.2.7.2 2.1 0 3zm879 0c-.3 1-.5.4-.5-1.2 0-1.7.2-2.4.5-1.8.2.7.2 2.1 0 3zm-880 15c-.2 1.6-.4.5-.4-2.2 0-2.8.2-4 .4-2.8.2 1.3.2 3.5 0 5zm881 0c-.2 1.6-.4.5-.4-2.2 0-2.8.2-4 .4-2.8.2 1.3.2 3.5 0 5zm-512.3 23c.4 3.2 1.2 7.5 1.8 9.6.6 2 .9 4 .6 4.3-.7.6-5 1.5-40.8 8.4-14.6 2.8-28.5 5.5-31 6s-20.9 4.1-41 8c-40.7 7.9-92.5 18.1-107 21-5.2 1.1-19.2 3.8-31 6s-23.5 4.5-26 5-6.3 1.2-8.5 1.5c-2.2.3-4.9.9-6 1.2-1.1.3-1.7.3-1.4-.1 1.2-1.3 38.3-11.3 128.4-34.6 15.4-4 36.1-9.4 46-12 9.9-2.6 28.8-7.6 42-11 13.2-3.4 34.6-9.1 47.5-12.6 12.9-3.4 24-6.3 24.6-6.3.6-.1 1.4 2.4 1.8 5.6zm169.1.7c13.2 3.5 34.8 9.2 48 12.6 13.2 3.4 32.1 8.4 42 11 9.9 2.6 30.6 8 46 12 90.1 23.3 127.2 33.3 128.4 34.6.3.4-.3.4-1.4.1-1.1-.4-4.7-1.1-8-1.6-10.5-1.7-75-14.2-119.5-23.1-8-1.6-30.9-6.1-51-10-20.1-3.9-38.5-7.5-41-8s-16.4-3.2-31-6c-35.8-6.9-40.1-7.8-40.8-8.4-.3-.3 0-2.3.6-4.3.6-2.1 1.4-6.4 1.8-9.6.4-3.1 1-5.7 1.3-5.7.3 0 11.4 2.9 24.6 6.4zm-537.8 7.3c-.2 1.6-.4.5-.4-2.2 0-2.8.2-4 .4-2.8.2 1.3.2 3.5 0 5zm881 0c-.2 1.6-.4.5-.4-2.2 0-2.8.2-4 .4-2.8.2 1.3.2 3.5 0 5zm-505.9 13.5c3.7 7.9 10.9 17.5 17.4 23.2l5 4.4-7.9 9.3c-16.1 19.3-28.1 37.5-61.4 93-38.8 65-55.1 88.4-74.4 106.7-27.5 26.2-48.8 27.9-72.6 5.6-30.7-28.8-65.7-75-73.5-97.2-9.2-26.1 6.8-48.3 50.1-69.2 23-11.1 35.7-15.7 122-44 41.8-13.8 73.1-26.2 86.5-34.5 3-1.8 5.6-3.4 5.7-3.4 0-.1 1.4 2.7 3.1 6.1zm160.4 7.7c17.7 7.8 34.7 14 68.3 25.1 82.7 27.1 96.2 32 119 43 22.4 10.9 37.6 22.1 45.7 33.8 9.1 13.2 8.9 29.5-.5 46.2-16.4 29.2-40.3 59.2-68.7 86.3-23.4 22.4-45.2 20.7-72.6-5.6-19.4-18.5-35.5-41.7-74.3-106.6-33.2-55.4-45.3-73.7-61.4-92.9l-7.8-9.3 6.9-6.7c7-6.8 12.9-15 16.3-22.8l1.9-4.3 6.9 4c3.8 2.2 12.9 6.6 20.3 9.8zm-534.5-8.2c-.3 1-.5.4-.5-1.2 0-1.7.2-2.4.5-1.8.2.7.2 2.1 0 3zm879 0c-.3 1-.5.4-.5-1.2 0-1.7.2-2.4.5-1.8.2.7.2 2.1 0 3zm-878 15.5c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm877 0c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm-876 6c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm875 0c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm-874 10c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm403.9 2.4c4.9 2.5 8.8 5 8.6 5.6-.2.6-10.6 20.7-23.1 44.7-12.6 24-37.8 72.4-56.1 107.6-40 77.1-57.2 109.6-57.7 109.1-.6-.6 3.8-10.8 53.6-123.1 25.2-56.6 50.2-113.2 55.7-125.7 5.4-12.5 10-22.7 10-22.8.1 0 4.1 2.1 9 4.6zm83.8 18.2c5.5 12.5 30.6 69.3 55.9 126.2 46.7 105.4 54 122 53.4 122.6-.5.5-18.8-34.1-57.7-109.1-18.3-35.2-43.5-83.6-56.1-107.6-12.5-24-22.9-44.1-23.1-44.7-.2-.9 15.1-9.8 17.2-10.1.3 0 5 10.2 10.4 22.7zm385.3-20.6c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm-872 5c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm871 0c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zM640 711.5c8.7 0 15.8-.5 17.7-1.2l3.2-1.2 1.1 5.7c5 26.5 13.7 53.7 35.5 111.7 29.3 77.7 37.6 107.6 37.8 135 .1 18-3.3 29.3-11.6 37.7-12.2 12.5-31.3 16.2-83.7 16.2-52.4 0-71.5-3.7-83.7-16.2-8.3-8.4-11.8-19.8-11.6-37.7.2-27.5 8.6-57.6 37.8-135 21.8-57.9 30.5-85.2 35.5-111.7l1.1-5.7 3.2 1.2c1.9.7 9 1.2 17.7 1.2zM253 850c.6 1.1.8 2 .6 2-.3 0-1-.9-1.6-2-.6-1.1-.8-2-.6-2 .3 0 1 .9 1.6 2zm8 14c.6 1.1.8 2 .6 2-.3 0-1-.9-1.6-2-.6-1.1-.8-2-.6-2 .3 0 1 .9 1.6 2zm756 5c-.6 1.1-1.3 2-1.6 2-.2 0 0-.9.6-2s1.3-2 1.6-2c.2 0 0 .9-.6 2zm-738.9 21.7c1.3 1.6 1.2 1.7-.3.4-1.7-1.3-2.2-2.1-1.4-2.1.2 0 1 .8 1.7 1.7zm725.9-1.3c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm-720.9 8.3c1.3 1.6 1.2 1.7-.3.4-1-.7-1.8-1.5-1.8-1.7 0-.8.8-.3 2.1 1.3zm715.9-1.3c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm-710.9 8.3c1.3 1.6 1.2 1.7-.3.4-1.7-1.3-2.2-2.1-1.4-2.1.2 0 1 .8 1.7 1.7zm705.9-1.4c0 .2-1 1.2-2.2 2.3l-2.3 1.9 1.9-2.3c1.8-2.1 2.6-2.7 2.6-1.9zM291.5 909c1 1.1 1.6 2 1.3 2-.3 0-1.3-.9-2.3-2-1-1.1-1.6-2-1.3-2 .3 0 1.3.9 2.3 2zm698.5-.6c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zM295.5 914c1 1.1 1.6 2 1.3 2-.3 0-1.3-.9-2.3-2-1-1.1-1.6-2-1.3-2 .3 0 1.3.9 2.3 2zm691.5-1.7c0 .2-1 1.2-2.2 2.3l-2.3 1.9 1.9-2.3c1.8-2.1 2.6-2.7 2.6-1.9zM299.5 919c1 1.1 1.6 2 1.3 2-.3 0-1.3-.9-2.3-2-1-1.1-1.6-2-1.3-2 .3 0 1.3.9 2.3 2zm683.5-1.7c0 .2-1 1.2-2.2 2.3l-2.3 1.9 1.9-2.3c1.8-2.1 2.6-2.7 2.6-1.9zm-679 7.2c1.3 1.4 2.1 2.5 1.8 2.5-.2 0-1.5-1.1-2.8-2.5-1.3-1.4-2.1-2.5-1.8-2.5.2 0 1.5 1.1 2.8 2.5zm675-2.2c0 .2-1.2 1.4-2.7 2.8l-2.8 2.4 2.4-2.8c2.3-2.5 3.1-3.2 3.1-2.4zm-668.4 9.9 2.9 3.3-3.2-2.9c-3.1-2.8-3.8-3.6-3-3.6.2 0 1.6 1.5 3.3 3.2zm662.4-2.9c0 .2-1.7 1.9-3.7 3.8l-3.8 3.4 3.4-3.8c3.3-3.4 4.1-4.2 4.1-3.4zM328.5 951c7.1 7.1 12.7 13 12.5 13-.3 0-6.4-5.9-13.5-13-7.1-7.2-12.7-13-12.5-13 .3 0 6.4 5.8 13.5 13zM964 939.3c0 .1-5.7 5.8-12.7 12.7l-12.8 12.5 12.5-12.8c11.6-11.8 13-13.2 13-12.4zm-616 30.2c1.3 1.4 2.1 2.5 1.8 2.5-.2 0-1.5-1.1-2.8-2.5-1.3-1.4-2.1-2.5-1.8-2.5.2 0 1.5 1.1 2.8 2.5zm587-2.2c0 .2-1.2 1.4-2.7 2.8l-2.8 2.4 2.4-2.8c2.3-2.5 3.1-3.2 3.1-2.4zM355.5 976c1 1.1 1.6 2 1.3 2-.3 0-1.3-.9-2.3-2-1-1.1-1.6-2-1.3-2 .3 0 1.3.9 2.3 2zm571.5-1.7c0 .2-1 1.2-2.2 2.3l-2.3 1.9 1.9-2.3c1.8-2.1 2.6-2.7 2.6-1.9zm-564.9 7.4c1.3 1.6 1.2 1.7-.3.4-1.7-1.3-2.2-2.1-1.4-2.1.2 0 1 .8 1.7 1.7zm557.9-1.3c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm-552.9 5.3c1.3 1.6 1.2 1.7-.3.4-1.7-1.3-2.2-2.1-1.4-2.1.2 0 1 .8 1.7 1.7zm547.9-1.3c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zM371.5 989c1 1.1 1.6 2 1.3 2-.3 0-1.3-.9-2.3-2-1-1.1-1.6-2-1.3-2 .3 0 1.3.9 2.3 2zm539.5-1.7c0 .2-1 1.2-2.2 2.3l-2.3 1.9 1.9-2.3c1.8-2.1 2.6-2.7 2.6-1.9zm-534.9 5.4c1.3 1.6 1.2 1.7-.3.4-1.7-1.3-2.2-2.1-1.4-2.1.2 0 1 .8 1.7 1.7zm529.9-1.3c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm-522.9 6.3c1.3 1.6 1.2 1.7-.3.4-1.7-1.3-2.2-2.1-1.4-2.1.2 0 1 .8 1.7 1.7zm515.9-1.3c0 .2-.8 1-1.7 1.7-1.6 1.3-1.7 1.2-.4-.4 1.3-1.6 2.1-2.1 2.1-1.3zm-508.9 6.3c1.3 1.6 1.2 1.7-.3.4-1-.7-1.8-1.5-1.8-1.7 0-.8.8-.3 2.1 1.3zm491.9 5.7c0 .2-1.2 1.1-2.7 2l-2.8 1.7 2.4-2c2.3-2.1 3.1-2.5 3.1-1.7zm-425.5 32.4c-.3.3-1.1 0-1.8-.7-.9-1-.8-1.1.6-.5 1 .3 1.5.9 1.2 1.2zm369-.8c-.3.5-1.2 1-1.8 1-.7 0-.6-.4.3-1 1.9-1.2 2.3-1.2 1.5 0zm-360 4.8c-.3.3-1.1 0-1.8-.7-.9-1-.8-1.1.6-.5 1 .3 1.5.9 1.2 1.2zm351-.8c-.3.5-1.2 1-1.8 1-.7 0-.6-.4.3-1 1.9-1.2 2.3-1.2 1.5 0zm-249.8 30.6c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm8 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm133 0c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-128 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm123 0c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-113 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm103 0c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-96 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm89 0c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-73.4 1.1c-.7.2-2.1.2-3 0-1-.3-.4-.5 1.2-.5 1.7 0 2.4.2 1.8.5zm59 0c-.7.2-2.1.2-3 0-1-.3-.4-.5 1.2-.5 1.7 0 2.4.2 1.8.5zm-42.5 1c-1.5.2-4.2.2-6 0-1.8-.2-.6-.4 2.7-.4 3.3 0 4.8.2 3.3.4zm29 0c-1.5.2-4.2.2-6 0-1.8-.2-.6-.4 2.7-.4 3.3 0 4.8.2 3.3.4z" />
  </Svg>
);
export default WheelIcon;
