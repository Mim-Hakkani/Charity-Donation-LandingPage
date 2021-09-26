import './App.css';
import TopHeader from './Components/TopHeader/TopHeader';
import MainHeader from './Components/MainHeader/MainHeader';
import MainSection from './Components/MainSection/MainSection';
import TeamMember from './Components/OurTeamMember/TeamMember';
import Goal from './Components/OurGoal/Goal';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
       <TopHeader></TopHeader>
       <MainHeader></MainHeader>
       <MainSection></MainSection>
       <TeamMember></TeamMember>
       <Goal></Goal>
       <Footer></Footer>
    </div>
  );
}

export default App;
