import { useState, useEffect, useCallback } from 'react';
import { Container, Image, InnerContainer, HeightContainer, WeightContainer, HeightValue, WeightValue, Symbols, Result } from './styledComponents';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const BmiCalculator = () => {
    const storedHeight = JSON.parse(localStorage.getItem("height"));
    const storedWeight = JSON.parse(localStorage.getItem("weight"));

    const [height, setHeight] = useState(storedHeight !== null ? storedHeight : 170);
    const [weight, setWeight] = useState(storedWeight !== null ? storedWeight : 70);

    const onPlusHeight = () => setHeight((prevHeight) => prevHeight + 1);
    const onMinusHeight = () => setHeight((prevHeight) => prevHeight - 1);

    const onPlusWeight = () => setWeight((prevWeight) => prevWeight + 1);
    const onMinusWeight = () => setWeight((prevWeight) => prevWeight - 1);

    const calculateBMI = useCallback(() => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    }, [height, weight]);

    useEffect(() => {
        document.title = `Your BMI: ${calculateBMI()}`;
    }, [calculateBMI]);

    useEffect(() => {
        localStorage.setItem("height", JSON.stringify(height));
    }, [height]);

    useEffect(() => {
        localStorage.setItem("weight", JSON.stringify(weight));
    }, [weight]);

    return (
        <Container>
            <h1>BMI CALCULATOR</h1>
            <InnerContainer>
                <HeightContainer>
                    <h1>Height</h1>
                    <HeightValue>{height} cm</HeightValue>
                    <Symbols>
                        <CiCirclePlus fontSize={32} onClick={onPlusHeight} />
                        <CiCircleMinus fontSize={32} onClick={onMinusHeight} />
                    </Symbols>
                    <p>Set your height</p>
                </HeightContainer>
                <Image src='https://img.freepik.com/free-vector/man-body-mass-index-info-chart_90220-434.jpg?t=st=1718110636~exp=1718114236~hmac=181e787e23e14874e4c708c2422d47375f991383bf11008e6eb413783189ccee&w=900' alt='graph' />
                <WeightContainer>
                    <h1>Weight</h1>
                    <WeightValue>{weight} kgs</WeightValue>
                    <Symbols>
                        <CiCirclePlus fontSize={32} onClick={onPlusWeight} />
                        <CiCircleMinus fontSize={32} onClick={onMinusWeight} />
                    </Symbols>
                    <p>Set Your Weight</p>
                </WeightContainer>
            </InnerContainer>
            <Result>
                <p>Your BMI</p>
                <h1>{calculateBMI()}</h1>
            </Result>
        </Container>
    );
}
export default BmiCalculator;
