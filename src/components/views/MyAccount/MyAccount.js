import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import api from '../../../api';
import { Container } from './styles';
import { Button } from '../../../components';
import {
  CashFlow,
  MyBricks,
  MyProfits,
  MyRents,
  MySales,
  Loading,
} from './components';

const MyAccount = () => {
  const history = useHistory();
  const currentUserId = '98ef3f8c-e3e4-43c3-bbb2-e734c54400fd';
  const [isLoading, setIsLoading] = useState(false);
  const [accountData, setAccountData] = useState({});
  const [myProfits, setMyProfits] = useState({});
  const [myBricks, setMyBricks] = useState({});
  const [myRents, setMyRents] = useState({});
  const [mySales, setMySales] = useState({});

  useEffect(() => {
    const getAccountData = async () => {
      const { data } = await api.get(`users/${currentUserId}/my-account`);
      return data;
    }

    const getCapitalGain = async () => {
      const { data } = await api.get(`users/${currentUserId}/my-profits/capital-gain`);
      return data.capital_gain;
    }

    const getSales = async () => {
      const { data } = await api.get(`users/${currentUserId}/my-profits/sales`);
      return data.total_sales_profit;
    }

    const getRents = async () => {
      const { data } = await api.get(`users/${currentUserId}/my-profits/rents`);
      return data.totals.historic;
    }

    const getOthers = async () => {
      const { data } = await api.get(`users/${currentUserId}/my-profits/others`);
      return data.totals.historic;
    }

    const getMyBricks = async () => {
      const { data } = await api.get(`users/${currentUserId}/my-bricks`);
      return data;
    }

    const getMyRents = async () => {
      const { data } = await api.get(`users/${currentUserId}/my-rents`);
      return data;
    }

    const getMySales = async () => {
      const { data } = await api.get(`users/${currentUserId}/my-sales`);
      return data;
    }

    const fetchAccountData = async () => {
      try {
        setIsLoading(true);
        const accountData = await getAccountData();
        const capitalGain = await getCapitalGain();
        const sales = await getSales();
        const rents = await getRents();
        const others = await getOthers();
        const myBricks = await getMyBricks();
        const myRents = await getMyRents();
        const mySales = await getMySales();

        setAccountData(accountData);
        setMyProfits(prevData => ({
          ...prevData,
          capitalGain,
          sales,
          rents,
          others,
        }));
        setMyBricks(myBricks);
        setMyRents(myRents);
        setMySales(mySales);
        setIsLoading(false);
      } catch (error) {
        history.push('./error');
      }
    }

    fetchAccountData();
  }, [history]);

  return (
    <>
      {isLoading
        ? <Loading />
        : (
          <Container>
            <div className="head">
              <h1>Mi cuenta</h1>
              <Button text="Ver flujo de efectivo" />
            </div>
            <CashFlow
              accountData={accountData}
            />
            <MyProfits myProfits={myProfits} />
            <MyBricks myBricks={myBricks} />
            <div className="divided-layout">
              <MyRents myRents={myRents} />
              <MySales mySales={mySales} />
            </div>
          </Container>
        )
      }
    </>
  );
}

export default MyAccount;