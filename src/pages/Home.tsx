import React, { useEffect, useState } from "react";
import { differenceInDays, formatISO, parseISO } from "date-fns";
import SearchByRoketName from "./Header/SearchByRoketName";
import Filter from "./Header/Filter";
import Cards from "../components/Card";
import { useLaunchsQuery } from "../feather/launchApi";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const { data, error, isLoading, isSuccess } = useLaunchsQuery();
  const [searchData, setSearchData] = useState(isSuccess && data);

  useEffect(() => {
    if (data) {
      setSearchData(data);
    }
  }, [data]);

  const handleSearch = (roketName: string) => {
    const res = data?.filter((item: any) => {
      return (
        item.rocket.rocket_name.toLocaleLowerCase() ===
        roketName.toLocaleLowerCase()
      );
    });
    if (res) {
      setSearchData(res);
    }
  };

  // Handle Filter
  const handleFilter = (status: string) => {
    switch (status) {
      case "lastWeek":
        return setSearchData(
          isSuccess &&
            data &&
            data.filter((item) => {
              const dif = differenceInDays(
                parseISO(formatISO(new Date())),
                parseISO(item?.launch_year)
              );
              if (dif === 7) {
                return dif;
              }
              return null;
            })
        );

      case "lastMonth":
        return setSearchData(
          isSuccess &&
            data.filter((item: { launch_year: string }) => {
              const dis = differenceInDays(
                parseISO(formatISO(new Date())),
                parseISO(item.launch_year)
              );
              if (dis === 30) {
                return dis;
              }
              return null;
            })
        );
      case "lastYear":
        return setSearchData(
          isSuccess &&
            data.filter((item: { launch_year: string }) => {
              const dis = differenceInDays(
                parseISO(formatISO(new Date())),
                parseISO(item.launch_year)
              );
              if (dis === 365) {
                return dis;
              }
              return null;
            })
        );
      case "success":
        return setSearchData(
          isSuccess &&
            data.filter((item) => {
              return item.launch_success;
            })
        );

      case "fail":
        return setSearchData(
          isSuccess &&
            data.filter((item) => {
              return !item.launch_success;
            })
        );

      case "upcoming":
        return setSearchData(
          isSuccess &&
            data.filter((item: { upcoming: boolean }) => {
              return item.upcoming;
            })
        );
      default:
        setSearchData(isSuccess && data);
    }
    return null;
  };
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center text-center bg-dark">
        <h1 className="f1 text-white mb-3">SpaceX</h1>
        <div className="w-50 d-flex mb-5 mt-3">
          <Filter handleFilter={handleFilter}></Filter>
          <SearchByRoketName handleSearch={handleSearch}></SearchByRoketName>
        </div>
      </div>

      <Container className="mt-3" data-aos="fade-down">
        <Row xs={1} md={3} className="g-4">
          {isLoading && <h6>Loading...</h6>}
          {error && <h6>Something went wrong...</h6>}
          {isSuccess &&
            searchData &&
            searchData.map((launch, index) => (
              <Col key={Number(launch.flight_number) + Number(index)}>
                <Cards launch={launch}></Cards>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
