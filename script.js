/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

alert('Practice Task #2')

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 100);

alert(numberOfFilms);

let personalMovieDB = {count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
console.log(personalMovieDB);

for (let i=0; i<=1; i++)  {

	let filmName = prompt('Один из последних просмотренных фильмов?');
	let filmScore = prompt('На сколько оцените его?');
	personalMovieDB.movies[filmName] = filmScore;
}

console.log(personalMovieDB);

