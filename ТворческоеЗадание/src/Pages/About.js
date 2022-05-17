import React, {Component} from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class About extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return(
            <>
                <Header number="3"/>
                <div className="content">
                    <h1 align="center">Творческое задание</h1>
                    <h1>Автор приложения: студент группы ИВТ-05у Третьяков К.С.</h1>
                    <p align="center"><h3>Данный сайт представляет собой небольшое приложение для чтения новостей о космических полетах.</h3></p>

                    <p align="left"><h3>Приложение содержит следующие страницы:</h3></p>
                    <p align="left">
                        <ul>
                            <li>News - Страница с новостями</li>
                            <li>Favorite - Страница с пользовательскими закладками</li>
                            <li>About - Текущая страница</li>
                        </ul>
                    </p>
                    <p align="left"><h3>Также были реализованы следующие функции:</h3>
                        <ul>
                            <li>Пагинация, сортировка и поиск новостей</li>
                            <li>Переход по ссылкам</li>
                            <li>Кнопка "UP" для перехода вверх страницы</li>
                            <li>Роутинг</li>
                            <li>Добавление новостей в закладки</li>
                            <li>Анимация переключения разделов</li>
                            <li>Анимация кнопок</li>
                            <li>Комфортный интерфейс</li>
                            <li>Вывод ошибки 404 в случае перехода на несуществующий адрес</li>
                            <li>Back-End</li>
                        </ul>
                        </p>

                </div>
                <Footer/>
            </>
        )
    }


}

export default About;