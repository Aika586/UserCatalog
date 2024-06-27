import { useGetUsersDataQuery } from "../../services/users";
import { useParams } from "react-router-dom";
import HeaderBlock from "../headerBlock/HeaderBlock";
import telIcon from "../../assets/icons/Frame (4).png";
import mailIcon from "../../assets/icons/Frame (5).png";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetUsersDataQuery(id);
  const userData = data && data.data;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <>
      {data && (
        <HeaderBlock
          h1={`${userData?.first_name} ${userData?.last_name}`}
          title="Партнер"
          isUserPage
          imgSrc={userData?.avatar}
        />
      )}

      <div className={styles.userInfo_container}>
        <ul className={styles.text}>
          <li>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </li>
          <li>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: "Один из самых позитивных моментов — это осознание
            того, что ты помог клиенту перейти на совершенно новый уровень
            компетентности, уверенность в том, что после окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно". Помимо разнообразных проектов для клиентов
            финансового сектора, Сорин ведет активную предпринимательскую
            деятельность. Он является совладельцем сети клиник эстетической
            медицины в Швейцарии, предлагающей инновационный подход к красоте, а
            также инвестором других бизнес-проектов.
          </li>

          <li>
            Помимо разнообразных проектов для клиентов финансового сектора,
            Сорин ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </li>
        </ul>
        <div>
          <p className={styles.contacts}>
            {" "}
            <img src={telIcon} alt="telIcon" />
            <span> +7 (954) 333-44-55</span>
          </p>
          <p className={styles.contacts}>
            {" "}
            <img src={mailIcon} alt="mailIcon" />
            <span>{userData?.email}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
