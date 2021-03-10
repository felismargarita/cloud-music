import React from 'react'
import classnames from 'classnames'
import AntdIcon from '@ant-design/icons'
const MusicSvg = ()=>(
  <svg fill="currentColor" viewBox="0 0 1025 1024" version="1.1" p-id="2132"  width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M1001.1633 15.01154c-11.611928-9.768765-26.172917-15.01154-41.123018-15.01154-3.686326 0-7.413612 0.327673-11.140897 0.98302l-544.060799 96.00832c-30.596508 5.386132-52.857823 31.927681-52.857823 63.0157l0 549.426451c-32.48063-23.551529-74.627627-37.436691-121.403012-37.436691-27.196896 0-54.393792 4.50551-80.935341 13.311734-60.742465 20.254315-109.442931 60.865343-133.629327 111.49089-18.677386 39.136497-21.093978 81.693086-6.840183 119.867043 24.350233 65.207016 93.530289 107.333533 176.247355 107.333533 27.196896 0 54.393792-4.444071 80.894382-13.311734 60.701506-20.192876 109.401972-60.803904 133.588368-111.368013 10.403632-21.831243 15.257295-44.665987 15.462091-67.336893l0.573429 0 0-511.98976c3.686326 0 7.434091-0.327673 11.140897-0.921582l532.940381-94.042279 0 388.415912c-32.50111-23.551529-74.627627-37.436691-121.443971-37.436691-27.196896 0-54.434751 4.50551-80.935341 13.311734-60.742465 20.254315-109.442931 60.865343-133.567889 111.49089-18.697866 39.136497-21.114458 81.693086-6.881142 119.867043 24.391192 65.207016 93.50981 107.333533 176.247355 107.333533 27.196896 0 54.434751-4.444071 80.935341-13.311734 60.660547-20.192876 109.381492-60.803904 133.567889-111.368013 10.424112-21.831243 15.257295-44.665987 15.48257-67.316414l0.573429 0 0-671.9968c0-18.882182-8.376152-36.863263-22.875702-48.98718zM246.039842 949.98676c-76.675586 25.558529-155.931601 0.573429-176.923182-55.684006-21.053019-56.318874 24.02256-122.693226 100.677666-148.251755 76.675586-25.558529 155.931601-0.634867 176.923182 55.684006 21.093978 56.277914-24.00208 122.693226-100.677666 148.251755zM852.911545 853.99892c-76.737025 25.558529-155.99304 0.573429-176.98462-55.684006-21.053019-56.318874 24.063519-122.693226 100.677666-148.251755 76.737025-25.558529 155.99304-0.634867 176.98462 55.684006 21.093978 56.277914-23.961121 122.693226-100.677666 148.251755zM958.750068 160.00704l-544.060799 96.00832 0-96.00832 544.060799-96.00832 0 96.00832z" p-id="2133"></path></svg>
)
const DownloadSvg = ()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="12687" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M751.4 810.7c-16.3 0-29.5-13.2-29.5-29.5s13.2-29.5 29.5-29.5h8.4c101 0 167.6-112.1 167.6-212.7 0-110.5-96.2-199.5-205.8-201.8l-21.3-0.5-6.3-20.3c-30.5-98.5-96.3-156.3-213.6-156.3-146.3 0-240.9 108.4-240.9 252.2l0.2 0.3 2.4 27.1-26.8 4.6C150 455.5 98 522.5 98 596.7c0 84 65.1 154.9 141 154.9h26.2c16.3 0 29.5 13.2 29.5 29.5s-13.2 29.5-29.5 29.5H239c-107.9 0-199.1-98-199.1-214 0-94.7 59.2-178.4 141.2-204.6 10.2-164.8 129.2-291 299.3-291 133.6 0 222.1 69.2 263.3 178.4C877.2 293.9 984 402.8 984 539c0 126.8-85.1 267.8-232.6 271.7z" p-id="12688"></path><path d="M511.6 859.5L606.3 755c8.2-8.6 21.6-8.6 29.8 0l7.4 5.9c8.2 8.6 8.2 18.9 0 27.5L534.4 908.1c-0.1 0.2-0.2 0.3-0.3 0.5l-7.5 7.8c-4.1 4.3-9.5 6.5-15 6.4-5.4 0-10.9-2.1-15-6.4l-7.5-7.8c-0.1-0.1-0.2-0.3-0.3-0.5L382.3 790.3c-8.3-8.6-8.3-22.6 0-31.2l7.4-4.1c8.2-8.6 21.6-6.8 29.9 1.8l92 102.7z" p-id="12689"></path><path d="M511.9 500c16.3 0 29.5 13.2 29.5 29.5v324.7c0 16.3-13.2 29.5-29.5 29.5s-29.5-13.2-29.5-29.5V529.5c0-16.3 13.2-29.5 29.5-29.5z" p-id="12690"></path></svg>
)
const CloudSvg = ()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="28609" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M245.248 840.533333C116.8384 840.533333 12.8 736.494933 12.8 608.085333c0-115.985067 84.992-212.1216 196.096-229.546666 17.595733-151.808 146.602667-269.653333 303.086933-269.653334l5.666134 0.068267c153.9584 2.798933 280.064 119.6032 297.472 269.568 111.104 17.4592 196.061867 113.578667 196.061866 229.5808 0 128.375467-104.0384 232.448-232.3968 232.448z m266.734933-654.848l-5.3248 0.068267c-123.648 2.833067-223.0272 103.9872-223.0272 228.352a38.4 38.4 0 0 1-38.4 38.4c-85.9648 0-155.648 69.649067-155.648 155.5968a155.648 155.648 0 0 0 155.648 155.648h533.5552c85.930667 0 155.5968-69.6832 155.5968-155.648a155.562667 155.562667 0 0 0-155.5968-155.5968 38.4 38.4 0 0 1-38.4-38.4l-0.068266-5.3248c-2.816-123.682133-103.970133-223.0784-228.352-223.0784z" p-id="28610"></path></svg>
)
const FMSvg = ()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="30152" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M211.08716784 855.99506583c-13.2560719-2.65121438-21.87251863-11.93046471-30.48896537-21.20971504-70.25718107-74.23400265-114.66502195-161.72407719-127.92109385-263.79583082-19.88410785-153.10763045 23.19812583-285.66834947 127.92109385-398.34496064 17.89569707-19.22130427 46.39625165-13.2560719 54.34989479 11.26766112 3.97682157 11.93046471 1.3256072 24.52373301-7.95364313 33.80298334-64.29194871 66.9431631-102.73455724 146.47959451-112.67661116 238.60929423-13.2560719 125.26987947 22.53532223 234.63247265 107.3741824 328.08777955 3.97682157 4.63962516 7.95364315 8.61644674 12.5932683 13.2560719 20.54691145 20.54691145 13.2560719 49.04746604-14.58167909 57.00110918-1.3256072 0.66280359-1.98841078 0.66280359-3.31401797 1.32560718h-5.30242877zM975.96251653 510.01158922c-2.65121438 120.6302543-48.38466243 233.30686546-141.17716574 326.09936876-9.27925033 9.27925033-18.55850066 15.90728628-31.81457256 13.9188755-13.2560719-1.98841078-22.53532223-9.27925033-25.8493402-21.87251863-3.97682157-11.93046471-0.66280359-25.84934021 8.61644674-34.46578695 27.83775099-27.17494739 52.361484-58.32671636 72.24559185-92.12969972 89.47848533-157.74725563 64.29194871-355.92553055-62.30353793-485.17223157-12.5932683-12.5932683-14.58167909-30.48896537-5.30242877-43.74503728 9.94205392-14.58167909 29.82616178-17.89569707 44.40784087-7.95364315 1.98841078 1.3256072 3.31401797 2.65121438 5.30242876 4.63962517 60.31512715 60.97793075 103.39736083 137.86314777 122.61866509 222.03920435 8.61644674 35.79139413 12.5932683 71.58278827 13.25607189 118.64184352z" p-id="30153"></path><path d="M805.62199262 504.04635685c-1.3256072 79.53643141-30.48896537 151.11921968-90.14128894 209.44593605-9.27925033 9.27925033-19.22130427 17.23289347-33.14017975 14.5816791-12.5932683-1.98841078-21.87251863-9.94205392-25.8493402-22.53532224-3.97682157-11.93046471-0.66280359-25.18653662 8.61644672-33.14017975 23.19812583-22.53532223 42.41943008-49.04746604 55.675502-78.21082423 38.44260851-86.16446736 19.88410785-189.56182818-45.73344807-256.50499128-13.9188755-14.58167909-14.58167909-34.46578693-1.32560719-47.72185885s33.14017975-12.5932683 47.05905526 1.98841078c56.33830558 57.66391277 84.17605657 127.25829025 84.83886017 212.09715042z m-589.89519961 0c0.66280359-80.19923501 28.50055458-149.79361248 83.51325297-208.12032885 9.94205392-10.60485751 21.20971504-14.58167909 35.12859055-9.27925031 21.87251863 7.95364315 28.50055458 36.45419773 11.93046471 53.6870912-89.47848533 93.4553069-88.81568174 237.28368703 1.32560719 330.07619033 9.94205392 9.94205392 18.55850066 19.88410785 16.57008987 35.12859054-1.98841078 12.5932683-8.61644674 21.87251863-20.54691145 26.51214381-11.26766112 4.63962516-23.86092942 1.98841078-32.47737615-6.62803597-62.30353794-60.97793075-94.1181105-134.54912979-95.44371769-221.37640075z m300.25002856-98.75773566c58.98951997 0 106.71137881 48.38466243 106.7113788 108.03698601s-47.72185885 108.03698599-106.7113788 108.03698598c-58.98951997 0-106.71137881-48.38466243-106.71137881-108.03698598v-1.3256072c0.66280359-58.98951997 48.38466243-106.71137881 106.71137881-106.71137881z" p-id="30154"></path></svg>
)

const MarkSvg = ()=>(
  <svg fill="currentColor"  viewBox="0 0 1024 1024" version="1.1" p-id="32271" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M128 960H64v-160a224.64 224.64 0 0 1 224-224h192a224.64 224.64 0 0 1 224 224v160h-64v-160a160.48 160.48 0 0 0-160-160H288a160.48 160.48 0 0 0-160 160v160z m672-290.304l-134.784-136.416a88.32 88.32 0 0 1 0-123.712 85.6 85.6 0 0 1 122.112 0l12.8 12.8 12.544-12.8a85.632 85.632 0 0 1 122.112 0 88.32 88.32 0 0 1 0 123.712L800 669.696zM384 512a224 224 0 1 1 224-224 224.256 224.256 0 0 1-224 224z m0-384a160 160 0 1 0 160 160 160.192 160.192 0 0 0-160-160z" p-id="32272"></path></svg>
)
const StaveSvg = ()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="26719" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M552.4 958.3c-32.2 0-58.9-7.2-79.9-21.6-22.2-15.2-48.4-46.3-47-107.9 0-0.4 0-0.9 0.1-1.3 0.3-4.8 4.2-47.3 45.2-75.9 36.6-25.4 89.1-30.2 156.4-14.3V96.1c0-17.7 14.3-32 32-32C811.1 64.1 884.9 137.4 920 198.9c37.6 65.8 39 131.3 39 134.1 0.1 8.6-3.2 16.8-9.2 22.9-6 6.1-14.2 9.5-22.8 9.5H691.2v538.5c0 13-7.8 24.7-19.9 29.6-1.3 0.5-31.3 12.8-69.1 19.8-17.8 3.3-34.5 5-49.8 5z m-63-127c-0.6 39 14.3 49.2 19.2 52.6 15.9 10.9 44.5 13.3 80.8 6.7 14.4-2.6 27.6-6.2 37.8-9.4v-77.9c-54.9-15.2-97.2-15-119.9 0.8-14.8 10.3-17.6 25-17.9 27.2z m201.8-529.8h199.5c-4.1-20-12-46.6-27.4-72.8-34.6-59.1-92.4-92.4-172.1-99.3v172.1z" p-id="26720"></path><path d="M521.8 633.3H96.6c-17.7 0-32-14.3-32-32s14.3-32 32-32h425.2c17.7 0 32 14.3 32 32s-14.4 32-32 32zM521.8 473.3H96.6c-17.7 0-32-14.3-32-32s14.3-32 32-32h425.2c17.7 0 32 14.3 32 32s-14.4 32-32 32zM521.8 320.3H96.6c-17.7 0-32-14.3-32-32s14.3-32 32-32h425.2c17.7 0 32 14.3 32 32s-14.4 32-32 32z" p-id="26721"></path></svg>
)

const LoveSvg = ()=>(
  <svg fill="currentColor" viewBox="0 0 1092 1024" version="1.1" p-id="27479" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M575.010133 115.5072a5.666133 5.666133 0 0 0-2.730666 0h2.730666z m-24.7808 10.6496a18.432 18.432 0 0 1 1.024-1.092267c-0.887467 0.682667-0.955733 0.8192-1.024 1.092267z m57.344 33.655467l-5.7344 9.898666 0.4096 0.273067c1.570133-2.321067 3.072-5.461333 5.3248-10.171733zM755.234133 34.133333v68.266667c-60.484267 0-109.090133 22.050133-154.2144 69.358933l-53.998933 72.157867-55.773867-69.8368C445.0304 125.474133 396.0832 102.4 337.032533 102.4c-62.2592 0-120.832 25.736533-165.205333 72.772267A258.525867 258.525867 0 0 0 102.4 353.621333c0 67.515733 24.644267 130.730667 69.4272 178.244267l356.898133 381.883733A23.893333 23.893333 0 0 0 546.133333 921.6a23.893333 23.893333 0 0 0 17.544534-7.918933l356.829866-381.952a258.116267 258.116267 0 0 0 69.358934-178.176c0-67.584-24.712533-130.8672-69.4272-178.3808-44.373333-47.035733-102.946133-72.772267-165.205334-72.772267v-68.266667c81.237333 0 157.764267 33.655467 214.903467 94.208A326.724267 326.724267 0 0 1 1058.133333 353.621333a326.314667 326.314667 0 0 1-87.8592 224.8704l-356.693333 381.815467A92.16 92.16 0 0 1 546.133333 989.866667a92.16 92.16 0 0 1-67.310933-29.559467L122.0608 578.56A326.4512 326.4512 0 0 1 34.133333 353.553067c0-84.855467 31.197867-164.864 87.995734-225.211734C179.336533 67.720533 255.7952 34.133333 337.032533 34.133333 416.426667 34.133333 483.1232 65.9456 542.037333 128.341333l-2.525866 2.389334 4.437333-0.068267 13.9264-15.1552C616.174933 61.098667 679.662933 34.133333 755.165867 34.133333z" p-id="27480"></path></svg>
)

const PrviousSvg = ()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M364.302083 465.602819L687.954365 218.588294c38.416414-29.327534 93.791393-1.929039 93.791392 46.396277v494.029051c0 48.325316-55.374979 75.725617-93.791392 46.398084L364.302083 558.397181c-30.600916-23.357989-30.600916-69.436372 0-92.794362zM238.945254 780.798397V451.684117v-164.562559c0-19.628152-5.904521-60.475733 17.057907-75.841215 25.523642-17.068744 59.747828 1.210165 59.747828 31.919454v493.676839c0 19.628152 5.915358 60.473927-17.047069 75.841215-25.53448 17.068744-59.758666-1.211971-59.758666-31.919454z" p-id="2681"></path></svg>
)

const NextSvg =()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1"  p-id="2873" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z" p-id="2874"></path></svg>
)

const PlaySvg =()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="3018" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M836.526491 434.667753C656.714048 297.440472 476.912443 160.200546 297.101806 22.973265c-64.023142-48.859957-156.302732-3.213259-156.302732 77.331343v823.390784c0 80.544602 92.27959 126.1913 156.302732 77.329537 179.810637-137.227282 359.612242-274.467207 539.424685-411.694488 51.014773-38.93841 51.014773-115.724277 0-154.662688z" p-id="3019"></path></svg>
)

const PauseSvg=()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="2276" width="1em" height="1em"><path d="M377.567 153.513H243.134c-24.69 0-44.812 20.121-44.812 44.812v627.354c0 24.691 20.119 44.812 44.812 44.812h134.433c24.691 0 44.812-20.121 44.812-44.812V198.325c0-24.691-20.121-44.812-44.812-44.812z m403.299 0H646.433c-24.691 0-44.812 20.121-44.812 44.812v627.354c0 24.691 20.121 44.812 44.812 44.812h134.433c24.69 0 44.812-20.121 44.812-44.812V198.325c0-24.691-20.119-44.812-44.812-44.812z" p-id="2277"></path></svg>
  )

const OneRoundSvg=()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="1657" width="1em" height="1em"><path d="M545.3 630.5c-11 0-20-9-20-20V405.9c0-11 9-20 20-20s20 9 20 20v204.6c0 11-9 20-20 20z" p-id="1658"></path><path d="M478.5 491.2c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3l67.1-67.1c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-67.1 67.1c-4 4-9.1 5.9-14.2 5.9z" p-id="1659"></path><path d="M169.6 791c-5.7 0-11.4-2.4-15.3-7.1-27.4-32.6-48.8-69.2-63.5-109-15.3-41.1-23-84.4-23-128.7 0-49.9 9.8-98.3 29-143.8 18.6-44 45.2-83.5 79.2-117.4 33.9-33.9 73.4-60.6 117.4-79.2 45.6-19.3 93.9-29 143.8-29h274c11 0 20 9 20 20s-9 20-20 20h-274c-181.7 0-329.5 147.8-329.5 329.5 0 77.5 27.4 152.7 77.2 211.9 7.1 8.5 6 21.1-2.4 28.2-3.8 3-8.4 4.6-12.9 4.6z" p-id="1660"></path><path d="M712.7 215.5c-5.1 0-10.2-2-14.1-5.9l-67.1-67.1c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l67.1 67.1c7.8 7.8 7.8 20.5 0 28.3-4 3.9-9.1 5.9-14.2 5.9z" p-id="1661"></path><path d="M586.9 847.3h-274c-11 0-20-9-20-20s9-20 20-20h274c181.7 0 329.5-147.8 329.5-329.5 0-77.5-27.4-152.7-77.2-211.9-7.1-8.5-6-21.1 2.4-28.2 8.5-7.1 21.1-6 28.2 2.4 27.4 32.6 48.8 69.2 63.5 109 15.3 41.1 23 84.4 23 128.7 0 49.9-9.8 98.3-29 143.8-18.6 44-45.2 83.5-79.2 117.4s-73.4 60.6-117.4 79.2c-45.6 19.3-94 29.1-143.8 29.1z" p-id="1662"></path><path d="M378.4 915.6c-5.1 0-10.2-2-14.1-5.9l-67.1-67.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l67.1 67.1c7.8 7.8 7.8 20.5 0 28.3-3.9 4-9.1 5.9-14.2 5.9z" p-id="1663"></path></svg>
)

const AllRoundSvg=()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="961" width="1em" height="1em"><path d="M357.8368 804.9152c-160.7168 0-291.5328-130.7648-291.5328-291.5328s130.7648-291.5328 291.5328-291.5328h99.9936c16.9472 0 30.72 13.7728 30.72 30.72s-13.7728 30.72-30.72 30.72H357.8368c-126.8736 0-230.0928 103.2192-230.0928 230.0928 0 126.8736 103.2192 230.0928 230.0928 230.0928 16.9472 0 30.72 13.7728 30.72 30.72s-13.7728 30.72-30.72 30.72zM675.4816 804.9152h-121.5488c-16.9472 0-30.72-13.7728-30.72-30.72s13.7728-30.72 30.72-30.72h121.5488c126.8736 0 230.0928-103.2192 230.0928-230.0928 0-126.8736-103.2192-230.0928-230.0928-230.0928-16.9472 0-30.72-13.7728-30.72-30.72s13.7728-30.72 30.72-30.72c160.7168 0 291.5328 130.7648 291.5328 291.5328s-130.816 291.5328-291.5328 291.5328z" p-id="962"></path><path d="M389.2224 378.1632c-8.0384 0-16.0256-3.1232-22.0672-9.3696a30.6688 30.6688 0 0 1 0.6656-43.4176l73.3696-71.1168-71.7824-60.5184a30.75072 30.75072 0 0 1-3.6864-43.3152 30.75072 30.75072 0 0 1 43.3152-3.6864l97.792 82.432c6.656 5.5808 10.5984 13.7216 10.9056 22.4256s-3.072 17.1008-9.3184 23.1424L410.624 369.5104a30.73536 30.73536 0 0 1-21.4016 8.6528zM628.3776 888.6272c-7.3216 0-14.6432-2.6112-20.5312-7.8336l-97.792-87.7568a30.81728 30.81728 0 0 1-10.1888-23.9104c0.3072-9.0624 4.608-17.5616 11.776-23.1424l97.792-76.3392c13.3632-10.4448 32.6656-8.0384 43.1104 5.3248a30.6688 30.6688 0 0 1-5.3248 43.1104l-68.864 53.76 70.5024 63.232a30.69952 30.69952 0 0 1 2.3552 43.3664 30.47424 30.47424 0 0 1-22.8352 10.1888z" p-id="963"></path></svg>
)

const RandomSvg = ()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="1921" width="1em" height="1em"><path d="M828.0576 871.2704a30.6944 30.6944 0 0 1-22.5792-51.5072l77.2608-83.968-75.776-71.6288c-12.3392-11.6736-12.8512-31.0784-1.2288-43.4176s31.1296-12.8512 43.4176-1.2288l97.792 92.4672c12.1856 11.52 12.9024 30.7712 1.4848 43.1104l-97.792 106.2912a30.60224 30.60224 0 0 1-22.5792 9.8816z" p-id="1922"></path><path d="M863.8976 712.6016c-195.2768 36.352-277.1456-156.7232-280.5248-164.864-0.6656-1.6896-1.536-3.328-2.5088-4.9152-0.1024-0.1536-3.84-6.0416-13.8752-22.3744 10.0352-16.3328 13.7728-22.2208 13.8752-22.3744 0.9728-1.536 1.8432-3.1744 2.5088-4.9152 0.2048-0.512 21.0432-51.0464 66.9184-97.2288 59.7504-60.1088 131.6352-82.8928 213.6064-67.6352 16.6912 3.072 32.7168-7.8848 35.84-24.576a30.72 30.72 0 0 0-24.576-35.84c-101.7344-18.8928-194.5088 10.3936-268.3904 84.736-42.5984 42.9056-67.072 88.9856-76.1856 108.2368-11.7248-19.2512-25.856-42.5984-42.9568-70.912C406.8864 256.3584 260.096 257.9968 246.1184 258.5088h-154.624c-16.9472 0-30.72 13.7728-30.72 30.72s13.7728 30.72 30.72 30.72h155.1872c0.512 0 0.9728 0 1.4848-0.0512 1.1776-0.0512 122.5728-4.5568 186.88 101.7856 26.368 43.6736 45.7728 75.6224 59.904 98.7136-14.1312 23.0912-33.536 55.04-59.904 98.7136-63.6928 105.472-181.9648 101.9904-186.88 101.7856-0.512 0-0.9728-0.0512-1.4848-0.0512H91.4944c-16.9472 0-30.72 13.7728-30.72 30.72s13.7728 30.72 30.72 30.72h154.5728c0.9728 0.0512 2.56 0.0512 4.6592 0.0512 29.1328 0 161.6384-7.0656 236.8-131.5328 17.1008-28.3136 31.2832-51.6608 42.9568-70.912 9.1136 19.2512 33.536 65.3312 76.1856 108.2368 59.2896 59.6992 130.816 90.3168 209.3056 90.3168 19.3024 0 39.0144-1.8432 59.0848-5.5808a30.72 30.72 0 0 0 24.576-35.84c-3.0208-16.5376-19.0464-27.4944-35.7376-24.4224z" p-id="1923"></path><path d="M828.0576 429.824a30.6176 30.6176 0 0 1-22.3232-9.6256 30.67904 30.67904 0 0 1 1.2288-43.4176l75.776-71.6288-77.2608-83.968a30.79168 30.79168 0 0 1 1.792-43.4176c12.4928-11.52 31.9488-10.6496 43.4176 1.792l97.792 106.2912c11.3664 12.3904 10.7008 31.5904-1.4848 43.1104l-97.792 92.4672a30.72512 30.72512 0 0 1-21.1456 8.3968z" p-id="1924"></path></svg>
)

const TurnListSvg = ()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="1482" width="1em" height="1em"><path d="M746.1 683l-125-200h98.8V169.8h50V483h101.2l-125 200zM552.7 169.8h-440v50h440v-50z m0 211.5h-440v50h440v-50z m0 211.4h-440v50h440v-50z m-440 211.5v50h798.6v-50H112.7z" p-id="1483"></path></svg>
)

const StartSvg = ()=>(
<svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1"  p-id="2292" width="1em" height="1em"><path d="M900.571429 529.714286l-758.857143 421.714286q-13.142857 7.428571-22.571429 1.714286t-9.428571-20.571429l0-841.142857q0-14.857143 9.428571-20.571429t22.571429 1.714286l758.857143 421.714286q13.142857 7.428571 13.142857 17.714286t-13.142857 17.714286z" p-id="2293"></path></svg>)

const VolumeNormal = ()=>(
<svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="1577" width="1em" height="1em"><path d="M576 96v832l-288-192H96V288h192l288-192z m213.248 105.856A414.976 414.976 0 0 1 928 512c0 122.784-53.184 233.12-137.76 309.28l-45.344-45.344A351.136 351.136 0 0 0 864 512c0-105.6-46.464-200.288-120.096-264.8l45.344-45.344zM512 215.584L307.392 352H160v320h147.392L512 808.384V215.584z m163.84 99.68A255.456 255.456 0 0 1 768 512a255.456 255.456 0 0 1-91.168 195.84l-45.44-45.44A191.68 191.68 0 0 0 704 512a191.68 191.68 0 0 0-73.696-151.232l45.504-45.504z" p-id="1578"></path></svg>)

const VolumeSilent = ()=>(
<svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="1879" width="1em" height="1em"><path d="M576 96v832l-288-192H96V288h192l288-192z m-64 119.584L307.392 352H160v320h147.392L512 808.384V215.584z m378.496 160.64l45.248 45.248L845.248 512l90.496 90.528-45.248 45.248L800 557.216l-90.56 90.528-45.216-45.248L754.752 512l-90.496-90.464 45.248-45.28L800 466.752l90.496-90.56z" p-id="1880"></path></svg>)

const PlayList = ()=>(
<svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="1637" width="1em" height="1em"><path d="M128 432c0-35.2 25.104-49.888 55.776-32.624l144.432 81.248c30.672 17.264 30.672 45.504 0 62.752l-144.432 81.248C153.104 641.888 128 627.2 128 592V432zM896 688a32 32 0 0 1-32 32H480a32 32 0 1 1 0-64h384a32 32 0 0 1 32 32zM896 160a32 32 0 0 1-32 32H160a32 32 0 1 1 0-64h704a32 32 0 0 1 32 32zM896 864a32 32 0 0 1-32 32H160a32 32 0 1 1 0-64h704a32 32 0 0 1 32 32zM896 336a32 32 0 0 1-32 32H480a32 32 0 1 1 0-64h384a32 32 0 0 1 32 32zM896 512a32 32 0 0 1-32 32H480a32 32 0 1 1 0-64h384a32 32 0 0 1 32 32z" p-id="1638"></path></svg>
)
const Collection = ()=>(
<svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="8437" width="1em" height="1em"><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z" p-id="8438"></path></svg>
)

const Delete = ()=>(
<svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="9205" width="1em" height="1em"><path d="M768 960H256c-52.8 0-96-43.2-96-96V288c0-17.6 14.4-32 32-32s32 14.4 32 32v576c0 17.6 14.4 32 32 32h512c17.6 0 32-14.4 32-32V288c0-17.6 14.4-32 32-32s32 14.4 32 32v576c0 52.8-43.2 96-96 96zM896 192H672c-8 0-16-3.2-22.4-9.6l-44.8-44.8c-6.4-6.4-14.4-9.6-24-9.6h-139.2c-8 0-16 3.2-22.4 9.6l-44.8 44.8c-6.4 6.4-14.4 9.6-22.4 9.6H128c-17.6 0-32-14.4-32-32s14.4-32 32-32h211.2l35.2-35.2C392 73.6 417.6 64 443.2 64h139.2c25.6 0 49.6 9.6 67.2 28.8L684.8 128H896c17.6 0 32 14.4 32 32s-14.4 32-32 32z" p-id="9206"></path><path d="M400 832c-17.6 0-32-14.4-32-32V288c0-17.6 14.4-32 32-32s32 14.4 32 32v512c0 17.6-14.4 32-32 32zM624 832c-17.6 0-32-14.4-32-32V288c0-17.6 14.4-32 32-32s32 14.4 32 32v512c0 17.6-14.4 32-32 32z" p-id="9207"></path></svg>
)

const Source = ()=>(
  <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" p-id="3241" width="1em" height="1em"><path d="M455.808 644.864l224.512-224.576c22.912-22.912 23.424-59.84 1.088-82.112C659.136 315.84 622.208 316.352 599.296 339.2L374.784 563.776c-22.912 22.912-23.36 59.84-1.088 82.176l0 0C395.84 668.224 432.96 667.712 455.808 644.864L455.808 644.864 455.808 644.864zM469.248 703.552c8 11.264 9.216 23.232 9.152 29.952-0.128 8-2.24 23.552-15.488 36.736l-70.976 70.976c-13.248 13.248-28.608 15.36-36.736 15.488-8 0.128-23.488-1.6-36.352-14.464l-137.024-137.024c-12.864-12.864-14.592-28.224-14.464-36.352 0.128-8.128 2.24-23.552 15.488-36.736l70.976-70.976c13.248-13.248 28.608-15.36 36.736-15.488 5.696-0.064 14.976 0.832 24.32 5.76l75.136-75.136c-60.032-49.28-150.72-44.736-208.32 12.736L110.72 560c-61.12 61.12-62.4 159.68-2.88 219.2l137.024 137.024c59.52 59.52 158.08 58.24 219.136-2.88l70.976-70.976C593.92 783.296 597.12 689.088 543.552 629.12L469.248 703.552 469.248 703.552 469.248 703.552zM916.16 244.8l-137.024-137.024c-59.52-59.52-158.08-58.24-219.136 2.88L489.088 181.696C431.616 239.168 427.072 329.856 476.352 390.016l75.136-75.136c-4.928-9.472-5.824-18.752-5.76-24.32 0.128-8 2.24-23.552 15.488-36.736l70.976-70.976c13.248-13.248 28.608-15.36 36.736-15.488 8-0.128 23.488 1.6 36.352 14.528l137.024 137.024c12.864 12.864 14.592 28.224 14.464 36.352-0.128 8-2.24 23.552-15.488 36.736l-70.976 70.976c-13.184 13.184-28.608 15.36-36.736 15.488-6.72 0.064-18.688-1.152-29.952-9.152L629.248 543.616c59.968 53.568 154.048 50.496 213.184-8.64l70.976-70.976C974.4 402.88 975.68 304.192 916.16 244.8L916.16 244.8 916.16 244.8z" p-id="3242"></path></svg>
)

const icons = {
  music:MusicSvg,
  download:DownloadSvg,
  cloud:CloudSvg,
  fm:FMSvg,
  mark:MarkSvg,
  stave:StaveSvg,
  love:LoveSvg,
  previous:PrviousSvg,
  next:NextSvg,
  play:PlaySvg,
  pause:PauseSvg,
  oneRound:OneRoundSvg,
  allRound:AllRoundSvg,
  random:RandomSvg,
  turnList:TurnListSvg,
  start:StartSvg,
  volumeNormal:VolumeNormal,
  volumeSilent:VolumeSilent,
  playList:PlayList,
  collection:Collection,
  delete:Delete,
  source:Source
}

export type IconType = 'music'|'download'|'cloud'|'fm'|'mark'|'stave'|'love'|'previous'|'next'|'play'|'pause'|'oneRound'|'random'|'allRound'|'turnList'|'start'|'volumeNormal'|'volumeSilent'|'playList'|'collection'|'delete'|'source'

interface IconProps {
  type:IconType
  className?:string
  style?:React.CSSProperties
  size?:number
  onClick?:()=>void
}

const Icon:React.FC<IconProps> = ({type,className,size,onClick,style})=>{
  const classes = classnames('cloud-music-icon',className)
  return <AntdIcon onClick={onClick} className={classes} component={icons[type]} style={{fontSize:size,...style}}/>
}

Icon.defaultProps = {
  size:16
}

export default Icon