import styled from 'styled-components'
import BrowseBg from '../assets/browse-bg.png'

export const BuildSection = styled.section`
  display: flex;
  justify-content: flex-start;
  height: 900px;
  background: linear-gradient(to bottom, #ffff, #eaf4f7);
  position: relative;

  .skill-text {
    width: 610px;
    height: 250px;
    margin-top: 80px;
  }
  .skill-text h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }
  .skill-text p {
    font-size: 24px;
    margin-bottom: 30px;
  }
  .absolute-under {
    position: absolute;
    bottom: -10%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 818px;
    width: 100%;
    height: 283px;
    background: #4abbcd;
    z-index: 2;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .absolute-under p {
    font-size: 30px;
    font-weight: 500;
    color: #ffff;
  }

  .absolute-over {
    margin: 30px auto;
    width: 721px;
    height: 253px;
    background: #eaf4f7;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .absolute-over p {
    color: #212429;
  }
  .absolute-circle {
    position: absolute;
  }
  .full-circle {
    left: 13%;
    bottom: -10%;
  }
  .half-circle {
    left: 0;
    bottom: -25%;
  }

  @media screen and (max-width: 1012px) {
    .skill-img img {
      width: 400px;
    }
  }

  @media screen and (max-width: 850px) {
    flex-direction: column-reverse;
    height: 100%;

    .skill-img img {
      width: 100%;
    }
    .skill-text {
      width: 100%;
      height: 400px;
      
    }
  }

  @media screen and (max-width: 768px) {
    .absolute-under {
      width: 618px;
      height: 283px;
    }

    .absolute-over {
      margin: 30px auto;
      width: 521px;
      height: 253px;
    }
  }
`

export const Preview = styled.section`
  .form {
    position: relative;
  }

  .form span {
    position: absolute;
    left: 2%;
    top: 25%;
    transform: translateY(-50%);
  }

  .col {
    margin-bottom: 30px;
  }

  .myrow {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .mycol {
    margin-bottom: 50px;
  }

  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.23s;
    border-radius: 10px;
  }

  img:hover {
    box-shadow: 0 0.5em 0.5em -0.4em rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  .preview-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: 600;
    z-index: 100;
    color: #ffff;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    color: #212429;
  }

  @media screen and (max-width: 1300px) {
    .myrow {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    img {
      object-fit: cover;
      height: 250px;
      width: 320px;
    }
  }

  @media screen and (max-width: 1184px) {
    img {
     
      width: 300px;
    }
  }
  @media screen and (max-width: 1122px) {
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  @media screen and (max-width: 889px) {
    .myrow {
      flex-wrap: nowrap;
      justify-content: flex-start;
      flex-direction: row;
      overflow-x: scroll;
      margin-top: 100px;
    }

    img {
      height: 280px;
      width: 340px;
      margin-right: 30px;
    }
  }
`

export const BrowseSection = styled.section`
  background-image: url(${BrowseBg});
  max-width: 100%;
  .browse-text {
    margin-top: -80px;
  }
  .browse-images {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .browse-img-div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .preview-div {
    position: relative;
  }
  .preview-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: 600;
    z-index: 100;
    color: #ffff;
  }
  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.23s;
  }

  @media (max-width: 1026px) {
    .browse-images {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-left: 0px;
    }

    .browse-img-div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin-left: 20px;
    }
  }

  @media (max-width: 768px) {
    .browse-images {
      margin-top: 30px;
    }

    .browse-img-div {
      margin-left: 10px;
    }
  }
`

export const NewsSection = styled.section`
  background: #eaf4f7;
  height: 568px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: #3c8d3a;
    height: 404px;
  }

  .container p {
    font-size: 30px;
    font-weight: 500;
    color: #ffff;
  }
  .container input {
    width: 575px;
    height: 52px;
    margin: 40px auto;
    outline: none;
    padding-left: 15px;
  }

  .news-hidden {
    display: none;
  }

  @media (max-width: 768px) {
    .news-hidden {
      display: block;
    }

    .news-active {
      display: none;
    }

    .container input {
      width: 250px;
      height: 52px;
      margin: 40px auto;
      outline: none;
    }
  }
`

export const FooterSection = styled.footer`
  margin-top: 80px;
  margin-bottom: 50px;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0px 80px 30px 80px;
  }

  a {
    color: #495057;
    font-size: 18px;
    transition: 0.3s;
  }

  a:hover {
    color: #fe5f00;
    text-decoration: none;
  }

  hr {
    width: 100%;
    height: 2px;
    background-color: #4abbcd;
  }

  small {
    display: block;
    padding-left: 80px;
    margin-top: 30px;
  }

  @media (max-width: 1026px) {
    div {
      padding: 0px 40px 30px 40px;
    }

    small {
      padding-left: 40px;
    }
  }

  @media (max-width: 768px) {
    div {
      width: 100%;
      padding: 0px 20px 20px 20px;
    }

    small {
      padding-left: 20px;
    }

    .footer-logo {
      display: none;
    }
  }

  @media (max-width: 550px) {
   .footer-list{
     font-size: 14px;
   }
  }
`

export const LearnSection = styled.section`
  background: white;
  .container {
    width: 704px;
  }

  .learn-img.hidden {
    display: none;
  }

  h1 {
    font-size: 36px;
    line-height: 54px;
  }

  p {
    font-size: 20px;
    line-height: 30px;
  }

  img {
    object-fit: cover;
    max-width: 100%;
  }

  .learn-people {
    margin-top: 80px;
    height: 436px;
    display: flex;
    justify-content: space-between;
  }

  .learn-img {
    height: 450px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 590px;
    width: 100%;
  }

  @media (max-width: 1300px) {
    .learn-img {
      height: 420px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      max-width: 500px;
      width: 100%;
    }

    .learn-img img {
      width: 220px;
    }

    .learn-img img:nth-child(1) {
      width: 100%;
    }
    .stand-alone {
      width: 250px;
    }
  }

  @media (max-width: 1170px) {
    .stand-alone {
      width: 220px;
    }
    .learn-img {
      height: 420px;
      max-width: 450px;
      width: 100%;
    }

    .learn-img img {
      width: 200px;
    }
  }

  @media (max-width: 1026px) {
    .learn-img.hidden {
      display: flex;
      margin: 50px auto;
      height: 420px;
      max-width: 670px;
      width: 100%;
    }
    .learn-img {
      display: none;
    }
    .learn-img img {
      width: 300px;
      height: 200px;
      margin-top: 20px;
    }
    .stand-alone {
      width: 350px;
    }
  }

  @media (max-width: 851px) {
    .stand-alone {
      width: 300px;
    }

    .container {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 100%;
    }
    .stand-alone {
      /* width: 250px; */
    }
    .learn-people {
      margin-top: 80px;
      height: 100%;
    }
    .learn-img img {
      /* width: 250px; */
      height: 200px;
      margin-top: 20px;
    }
  }

  @media (max-width: 633px) {
    .container {
      width: 100%;
    }
    .stand-alone {
      width: 250px;
    }
    .learn-people {
      margin-top: 80px;
      height: 100%;
    }
    .learn-img img {
      width: 250px;
      height: 200px;
      margin-top: 20px;
    }
  }

  @media (max-width: 550px) {
    .learn-people {
      flex-direction: column;
      align-items: center;
    }

    .learn-people .stand-alone {
      width: 70%;
      margin-top: 50px;
    }

    .learn-people .stand-alone:nth-child(1) {
      margin-top: 0;
    }
    .learn-img.hidden {
      margin-bottom: 30px;
      height: 600px;
      width: 400px;
    }
    .learn-img.hidden img {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    .learn-img.hidden {
      margin-bottom: 30px;
      height: 600px;
      width: 100%;
    }
  }
`
export const TeamSection = styled.section`
  background: rgba(234, 244, 247, 1);

  .team-images {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 80px;
  }

  h4 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 1270px) {
    h4 {
      margin-top: 20px;
      font-size: 26px;
      font-weight: 600;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 700px) {
    .team-images {
      display: flex;
      justify-content: space-around;
    }

    .team-images > div{
      margin-bottom: 20px;
    }
  }
`

export const CourseSection = styled.section`
  margin-top: -70px;
  .course-img {
    height: 300px;
    width: 100%;
  }

  img {
    object-fit: cover;
    width: inherit;
    height: inherit;
    border-radius: 6px;
  }

  .course-wrap {
    margin-top: 60px;
    margin-left: 5px;
    width: 100%;
  }
  .search-filter {
    height: 573px;
    /* width: 313px; */
    background: rgba(234, 244, 247, 1);
    border-radius: 6px;
    padding: 30px 0;
    margin-right: 50px;
  }

  p {
    padding-left: 20px;
    font-size: 20px;
    font-weight: 500;
  }

  .checkbox-wrapper {
    margin-left: 20px;
  }
  hr {
    width: 100%;
  }

  .tutorials a {
    text-decoration: none;
    color: black !important;
  }
  .tutorial-flex {
    display: flex;
  }

  .tutorial-flex h4 {
    margin-left: 10px;
  }

  @media (max-width: 1100px) {
    .search-filter {
      padding: 30px 0;
      margin-right: 30px;
    }
  }

  @media (max-width: 940px) {
    .search-filter {
      padding: 20px 0;
      margin-right: 15px;
    }

    .tutorials {
      margin-top: 30px;
    }
  }

  @media (max-width: 770px) {
    .course-img {
      height: 200px;
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    .search-filter {
      width: 100%;
    }
  }
`

export const CardGroup = styled.div`
  height: 224px;
  width: 816px;
  border-radius: 6px;
  background: rgba(234, 244, 247, 0.5);
  border: 1px solid #4abbcd;
  margin-top: 30px;
  padding: 30px;
  display: flex;
  justify-content: start;
  align-items: center;

  .card-img {
    width: 278px;
    border-radius: 6px;
    margin-right: 40px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .card-subdiv {
    height: 150px;
    width: 100%;
    font-size: 20px;
    padding: 0;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }

  p {
    padding-left: 0;
    margin-bottom: 5px;
    font-size: 22px;
  }

  span {
    display: block;
  }

  .card-spandiv {
    width: 261px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .disabled-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #acb5bd;
  }

  .blue-span {
    color: #4abbcd;
  }

  .advance-span {
    margin-left: -20px;
  }

  a {
    color: #495057;
    text-decoration: underline;
    font-size: 18px;
    margin-top: -10px;
  }

  .saved-span {
    color: #fe5f00;
  }

  .fa-bookmark {
    padding-right: 10px;
  }

  @media (max-width: 1300px) {
    width: 700px;
  }

  @media (max-width: 1100px) {
    width: 600px;
    padding: 15px;

    .card-img {
      width: 278px;
      border-radius: 6px;
      margin-right: 20px;
    }
  }

  @media (max-width: 980px) {
    width: 100%;
    padding: 20px;

    .card-img {
      width: 240px;
      border-radius: 6px;
      margin-right: 30px;
    }
    a {
      color: #495057;
      text-decoration: underline;
      font-size: 16px;
      margin-top: 0px;
    }
  }

  @media (max-width: 630px) {
    .card-img {
      width: 200px;
      border-radius: 6px;
      margin-right: 10px;
    }

    .card-subdiv {
      height: fit-content;
      width: 100%;
      font-size: 16px;
    }

    a {
      color: #495057;
      text-decoration: underline;
      font-size: 16px;
      margin-top: 0px;
    }
  }

  @media (max-width: 580px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;

    .card-img {
      width: 150px;
      border-radius: 6px;
      margin-right: 10px;
      margin-top: 20px;
    }

    .card-subdiv {
      height: 100%;
      width: 90%;
      margin: 10px auto;
      font-size: 16px;
      text-align: center;
    }
  }
`

export const ProfileSection = styled.section`
  padding: 70px 200px;
  .profile-flex {
    margin-bottom: 80px;
    /* width:80%; */
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .profile-user {
    padding: 40px 10px;
    height: 430px;
    width: 290px;
    border-radius: 6px;
    background: #eaf4f7;
  }

  .person-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .avatar {
    height: 192px;
    width: 192px;
    object-fit: contain;
  }

  .user-name {
    font-size: 24px;
    font-weight: 500;
    color: #212429;
    margin-top: 10px;
  }

  .user-email {
    font-size: 20px;
    font-weight: 400;
    color: #acb5bd;
    margin-top: -20px;
  }

  .profile-form {
    width: 609px;
  }

  .profile-pic {
    background: rgba(172, 181, 189, 1);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 140px;
    right: 50px;
  }

  @media (max-width: 1300px) {
    padding: 70px 100px;
  }

  @media (max-width: 1139px) {
    padding: 70px 50px;

    .profile-form {
      width: 509px;
    }
  }

  @media (max-width: 926px) {
    .profile-user {
      height: 430px;
      width: 250px;
    }
    .avatar {
      height: 150px;
      width: 150px;
      object-fit: contain;
    }

    .profile-form {
      width: 450px;
    }

    .profile-pic {
      top: 110px;
    }
  }

  @media (max-width: 790px) {
    .profile-user {
      height: 430px;
      width: 200px;
    }

    .profile-form {
      width: 400px;
    }

    .user-name {
      font-size: 20px;
      padding-top: 20px;
    }

    .user-email {
      font-size: 16px;
    }
  }

  @media (max-width: 717px) {
    .profile-flex {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .profile-user {
      height: 430px;
      width: 70%;
    }

    .profile-form {
      width: 100%;
    }
    .user-name {
      font-size: 20px;
    }

    .user-email {
      font-size: 16px;
    }
  }

  @media (max-width: 550px) {
    padding: 70px 20px;
  }
`