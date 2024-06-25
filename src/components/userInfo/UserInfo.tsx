import { useGetUsersDataQuery } from "../../services/users";
import { useParams } from "react-router-dom";
import HeaderBlock from "../headerBlock/HeaderBlock";

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
          className="user_page"
          h1={`${userData?.first_name} ${userData?.last_name}`}
          title="Партнер"
          isUserPage
          imgSrc={userData?.avatar}
        />
      )}

      
    </>
  );
};

export default UserInfo;
