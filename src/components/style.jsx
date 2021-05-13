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
    width: 818px;
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
    position: relative;
  }

  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.23s;
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
  }
`

export const FooterSection = styled.footer`
  margin-top: 80px;
  margin-bottom: 50px;

  nav {
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin-left: 80px;
    margin-bottom: 30px;
  }

  img {
    margin-right: 150px;
  }

  a {
    color: #495057;
    font-size: 18px;
    transition: 0.3s;
  }

  a:hover {
    color: #fe5f00;
  }

  hr {
    width: 100%;
    height: 2px;
    background-color: #4abbcd;
  }

  small {
    display: block;
    margin-left: 80px;
    margin-top: 30px;
  }
`

export const LearnSection = styled.section`
  background: white;
  .container {
    width: 704px;
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
    width: 590px;
  }
`
export const TeamSection = styled.section`
  background: rgba(234, 244, 247, 1);

  .team-images {
    display: flex;
    justify-content: space-between;
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
`

export const CourseSection = styled.section`
  margin-top: -70px;
  .course-img {
    height: 242.06790161132812px;
    width: 100%;
  }

  img {
    object-fit: cover;
    height: 100%;
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

  .tutorials {
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
  gap: 40px;

  .card-img {
    width: 278px;
    border-radius: 6px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .card-subdiv {
    height: 150px;
    width: 261px;
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
`

// export const RecommendSection = styled.section`
// p{

// }

// `

export const ProfileSection = styled.section`
  padding:70px 200px;
 .profile-flex{
   margin-bottom:80px;
   /* width:80%; */
   max-width:100%;
   display:flex;
   justify-content:space-between;
   align-items:flex-end
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

  .profile-form{
    width:609px;
  }

  .saved-courses{

  }
`
