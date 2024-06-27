import { useGetAllUsersDataQuery } from "../../services/users";
import { User } from "../../services/users";
import styles from "./CardsContainer.module.css";
import Card from "./Card";
import { useState } from "react";
const DisplayCards = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetAllUsersDataQuery(page);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <div className={styles.cards_container_wrapper}>
      <div className={styles.cards_container}>
        {data?.data.map((user: User) => (
          <Card
            key={user.id}
            imgSrc={user.avatar}
            name={`${user.first_name} ${user.last_name}`}
            id={user.id}
          />
        ))}
      </div>
      <div className="button_container">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={styles.pag_button}
        >
          Предыдущий
        </button>
        <button
          onClick={() =>
            setPage((prev) =>
              data && prev < data.total_pages ? prev + 1 : prev
            )
          }
          disabled={data && page >= data.total_pages}
          className={styles.pag_button}
        >
          Cледующий
        </button>
      </div>
    </div>
  );
};

export default DisplayCards;
