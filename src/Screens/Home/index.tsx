import { FC } from "react";
import { Text, View } from "react-native";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import TextBold from "../../Components/TextBold";

const Home: FC = () => {
    return (
        <View>
            <Header />
            <Container>
                <TextBold style={{marginTop: 26, marginBottom: 12}} text="Resumo do mês" />
            </Container>
        </View>
    )
}

export default Home
