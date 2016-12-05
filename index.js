const fs = require('fs');

fs.readFile('input-sample.json', 'utf8', (error, contents) => {
    let user = JSON.parse(contents);
    let transformedUser = {
        forename: user.firstName,
        surname: user.lastName
    };

    transformedUser.fullName = `${user.firstName} ${user.lastName}`;

    transformedUser.favouriteFilms =
        user.faveFilms
            .map(film => `${film.name} (${film.year})`)
            .sort();

    transformedUser.favouriteFilmCount = transformedUser.favouriteFilms.length;

    console.log(transformedUser);
});