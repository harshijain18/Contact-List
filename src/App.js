// import logo from './logo.svg';
import './App.css';
import {Card} from './components/card';
import {Contacts} from './components/contacts';

const Createcard = (Contacts) =>{
  return (
    <Card 
    name = {Contacts.name}
    image = {Contacts.image}
    tel = {Contacts.tel}
    email = {Contacts.email}
    />
  );
}

function App() {
  return (
<>
   <h1 className= "head">MY CONTACT LIST</h1>
    {Contacts.map(Createcard)}


   
   {/* <Card 
   name = {Contacts[0].name} 
   image = {Contacts[0].image}
   tel ={Contacts[0].tel} 
   email = {Contacts[0].email}/>
   <Card 
   name = {Contacts[1].name} 
   image = {Contacts[1].image}
   tel ={Contacts[1].tel} 
   email = {Contacts[1].email}/>
   <Card 
   name = {Contacts[2].name} 
   image = {Contacts[2].image}
   tel ={Contacts[2].tel} 
   email = {Contacts[2].email}/> */}
   </>
  );
}

export default App;
