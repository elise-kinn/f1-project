CREATE DATABASE IF NOT EXISTS `f1_tracker_db`;
USE `f1_tracker_db`;

CREATE TABLE users(
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    role ENUM('admin', 'user') DEFAULT 'user',
    user_points INT NOT NULL DEFAULT 0, 
    UNIQUE(username),
    UNIQUE(email)
)Engine=InnoDB;

CREATE TABLE user_favourites(
    id_user_favourites INT PRIMARY KEY AUTO_INCREMENT, 
    fk_id_user INT NOT NULL, 
    user_favourite_type ENUM('driver', 'team', 'race', 'tyre'), --  tyres ?
    id_target INT, -- driver, team, race
    FOREIGN KEY (fk_id_user)
        REFERENCES users(id_user)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (fk_id_user, user_favourite_type, id_target)
)Engine=InnoDB;

CREATE TABLE user_rankings( 
    id_user_ranking INT PRIMARY KEY AUTO_INCREMENT, 
    user_ranking_type ENUM('driver', 'team', 'races'),
    season_year INT, -- GESTION DE L'ANNNEE AVEC NODEJS
    user_ranking_position_index INT NOT NULL, 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_target INT, 
    fk_id_user INT, 
    FOREIGN KEY (fk_id_user)
        REFERENCES users(id_user)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (fk_id_user, user_ranking_type, id_target, season_year, user_ranking_position_index)
)Engine=InnoDB;

CREATE TABLE races(
    id_race INT PRIMARY KEY AUTO_INCREMENT, 
    race_name VARCHAR(100) NOT NULL,
    race_circuit VARCHAR(100) NOT NULL, 
    race_country VARCHAR(100) NOT NULL, 
    race_date DATETIME NOT NULL,
    race_img VARCHAR(255) NOT NULL, 
    UNIQUE (race_name, race_date)
)Engine=InnoDB;

CREATE TABLE drivers(
    id_driver INT PRIMARY KEY AUTO_INCREMENT,
    driver_first_name VARCHAR(50) NOT NULL,
    driver_last_name VARCHAR(50) NOT NULL,
    driver_number TINYINT NOT NULL, 
    driver_birthdate DATE NOT NULL, 
    driver_flag_img VARCHAR(255) NOT NULL, 
    driver_nationality VARCHAR(50) NOT NULL,
    INDEX(driver_last_name)
)Engine=InnoDB;

CREATE TABLE results(
    id_result INT PRIMARY KEY AUTO_INCREMENT,
    fk_id_driver INT, 
    fk_id_race INT, 
    place INT NOT NULL, 
    points INT NOT NULL, 
    status VARCHAR(50), 
    FOREIGN KEY (fk_id_driver) 
        REFERENCES drivers(id_driver)
        ON DELETE RESTRICT
        ON UPDATE RESTRICT,
    FOREIGN KEY (fk_id_race) 
        REFERENCES races(id_race)
        ON DELETE RESTRICT
        ON UPDATE RESTRICT,
    UNIQUE(place, fk_id_race)
)Engine=InnoDB;

CREATE TABLE teams(
    id_team INT PRIMARY KEY AUTO_INCREMENT,
    team_name VARCHAR(50) NOT NULL, 
    team_nationality VARCHAR(50) NOT NULL, 
    team_logo VARCHAR(255)
)Engine=InnoDB;

CREATE TABLE driver_teams (
    fk_id_driver INT NOT NULL,
    fk_id_team INT NOT NULL,
    season_year INT NOT NULL,
    FOREIGN KEY (fk_id_driver) 
        REFERENCES drivers(id_driver)
        ON DELETE RESTRICT
        ON UPDATE RESTRICT,
    FOREIGN KEY (fk_id_team) 
        REFERENCES teams(id_team)
        ON DELETE RESTRICT
        ON UPDATE RESTRICT, 
    PRIMARY KEY (fk_id_driver, fk_id_team, season_year)
)Engine=InnoDB;

CREATE TABLE predictions(
    id_prediction INT PRIMARY KEY AUTO_INCREMENT, 
    prediction_type ENUM('podium', 'anti-Podium', 'fastest_lap', 'winner') NOT NULL, -- etc
    prediction_points INT NOT NULL, 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
    id_target INT, -- ?? prédiction pilote / écurie
    fk_id_user INT,
    fk_id_race INT,
    FOREIGN KEY (fk_id_user)
        REFERENCES users(id_user)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (fk_id_race)
        REFERENCES races(id_race)
        ON DELETE CASCADE
        ON UPDATE CASCADE
)Engine=InnoDB;

CREATE TABLE user_comments( 
    id_comment INT PRIMARY KEY AUTO_INCREMENT, 
    content_comment VARCHAR(255) NOT NULL, 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    fk_id_user INT, 
    fk_id_race INT,
    FOREIGN KEY (fk_id_user)
        REFERENCES users(id_user)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (fk_id_race)
        REFERENCES races(id_race)
        ON DELETE CASCADE
        ON UPDATE CASCADE
)Engine=InnoDB;