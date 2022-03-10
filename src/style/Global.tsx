import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }



  }

  .vWwLy {
    background: #020305;
  }
    .bFhYEH {
      background: url(/images/decorations/bg_back.png) !important;

  }
.fqKrUG{
    background: url(/images/decorations/bg_back.png) !important;
  }
  .gpPoGP {
    background: linear-gradient(85.02deg, #C3BA53 0.75%, #C0884A 0.76%, #FAC579 42.64%, #A3743C 96.97%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 555;
  }
  .QkXZy {
    font-size: 20px;
    z-index: 55;
  }
  .iknYXm {
    background: #1D1D20;

  }
  .jEHltb {
    background: #1D1D20;
  }
  .hWYUSZ {
    background: #3A3A42;
  }
  .jLafOx {
    background: #3a3a42;
  }
  .bNODvF {
    background: #535355;

  }
  .QkXZy {
    color: #fff;
  }
  .gpWEaW {
    color: #CDC9D5;
  }
  .QRNTB {
    border-top: 1px solid #535355;
  }
  .TMxvV {
    background: linear-gradient(85.02deg,#C3BA53 0.75%,#C0884A 0.76%,#FAC579 42.64%,#A3743C 96.97%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .lnPFdP {
    color: #9E9DA1;
  }
  .eoXcuC {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(113.23deg, #C0884A 13.69%, #E9CF7E 75.09%) !important;
    color: #000;
  }
  .bXeBdO {
    color: #BAA564;
  }
  .jKFiqd {
    fill: #BAA564;
  }
  .gyKkRW {
    background: #535355;
  }
  .gUWVIE {
    color: #BDBDBD;
  }
  .eRUYIA {
    color: #BAA564;
  }
  .cnwnwF {
    color: #FFF;
  }
  .ibXLCT {
    color: #A19CB3;
  }
  .eMZTho {
    background: #3a3a42;
  }
  .iciRyN {
    background: linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(113.23deg,#C0884A 13.69%,#E9CF7E 75.09%) !important;
    color: #000;
  }
  .gWkuoo {
    background: #1d1d20;
  }
  .eEzreH {
    background: linear-gradient(85.02deg,#C3BA53 0.75%,#C0884A 0.76%,#FAC579 42.64%,#A3743C 96.97%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .kQIrMP {
    background: #3A3A42;
  }
  .fVKgqc {

    border-bottom: 1px #535355 solid;
  }
  .jhEWmv {
    color: #928F99;
  }
  .gAxjBz {
    fill: #9B94AA;
  }
  .bBSzxK {
    background: #535355;
  }
  .bgFuT {
    color: #A8A4BB;
  }
  .iiBgUF {
    color: #A7A1B3;
  }
  .fVFHby {
    background: #3a3a42;
  }
  .igpCap {
    background: #1D1D20;
  }
  .hhbxMO {
    background: #3A3A42;
  }
  .kZeaXZ {
    color: #9C9A9F;
  }
  .bOvSGx {
    background: #535355;
  }
  .cwHMHt {
    background: #535355;
  }
  .dufWnG {
    background: linear-gradient(85.02deg,#C3BA53 0.75%,#C0884A 0.76%,#FAC579 42.64%,#A3743C 96.97%);
    background-clip: border-box;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .eeFODu {
    color: #C4C4C4;
  }
  .ignVjE {
    color: #FFF;
  }
  .giHqvo {
    background-color: #535355;
  }
  .PZgwY {
    color: #9A999B;
  }
  .dneDFo {
    color: #9A999B;
  }
  .hLoFUM {
    color: #9A999B;
  }
  .fkyFmo {
    color: #FFF;
  }
  .hVlBZq {
    color: #FFF;
  }
  .cJnraq {
    color: #FFF;
  }
  .ggzGMu {
    color: #D69F5C;
  }
  .gcnCHI {
    color: #FFF; 
  }
  .cuxRvk {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(113.23deg, #C0884A 13.69%, #E9CF7E 75.09%) !important;
    color: #000 !important;
  }
  .iTtkWC {
    background: transparent !important;
    color: #fff !important;
  }
  .bcsCfH {
    background-color: #44444e;
    border: 1px solid #44444e;
  }
  .eSkoXi {
    background: #535355;
  }
  .fqUBFv {
    border-top: 1px solid #535355;
  }
  .dTImnC {
    background: linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(113.23deg,#C0884A 13.69%,#E9CF7E 75.09%) !important;
    color: #000;
  }
  .bzeJZX {
    color: #fff;
  }
  .bygrhu {
    background-color: #000;
    border-bottom: 1px solid #7D7982;
  }
  .cMeYRb {
    background-color: rgb(0, 0, 0);

  }
  .OAgJq {
    background: linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(113.23deg,#C0884A 13.69%,#E9CF7E 75.09%) !important;
    color: #000;
    border-radius: 10px;
    padding: 19px;
  }
  .Mcjxe {
    color: #fff;
  }
  .Mcjxe:hover {
    background: #535355;
    // border-radius: 16px;
  }
  .cnKmWA:hover {
    background: #535355;
    color: #f3be74;
  }
  .cnKmWA{
    color: #f3be74;
  }
  .cidrXa{
    background: #535355;
    border:none;
    color:#fff;
  }
  .jmNCwW > a.kRFpXY{
    color:# !important;
  }
  .gEEURT:first-child {
    color: #D69F5C;
  }
  .ifXaXq {
    position: relative;
    display: none;
  }
  .eUFWiW {
  
    display: none;
  }
  .bMRiLI:hover{
    background: #535355;
   color:#fff;
  }
  .bMRiLI{
    
    color:#fff;
   }
   .cymvJc:nth-child(1){
     display:none;
   }
   .cymvJc:nth-child(2){
    display:none;
  }
  .cymvJc:nth-child(3){
    color:#baa564 !important;
  }
  .fZxltW{
    color:#baa564 !important;
  }
  .ksBhTe:after {
    background-color: baa564;
  }
  .fZxwup {
  
    display: none;
  }
  .hShdj {
    display: none;
  }
  .leiBjj {
    fill: #7A6EAA;
    display: none;
  }
  .kRFpXY:hover:not(:disabled) {
    background-color: #3a3a42;
    color:#fff;
  }
  .kRFpXY{
    
    color:#fff !important;
  }
  .knyJNW {
    color:#baa564;
  }
  .ivbBKG {
    margin-top:0px;
  }
  .kEKIMo {
    display: none;
  }
  .dkoXHd {
    display: none;
  }
  .bygrhu {
    display: none;
  }
  .bZOekQ {

    display: none;
  }
  .eohAVP {
    display: none;
  }
  .cMeYRb {
    margin: 0;
  }
`

export default GlobalStyle
