import HeaderBlock from "../../components/headerBlock/HeaderBlock";
import DisplayCards from "../../components/cardsContainer/DisplayCards";

const HomePage = () => {
  return (
    <>
      <HeaderBlock
        className="headerHome"
        h1="Наша команда"
        title="Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, 
      и умеющие находить выход из любых, даже самых сложных ситуаций. "
      />
      <DisplayCards/>
    </>
  );
};

export default HomePage;
