drop database if exists alunos;
create database alunos charset=UTF8 collate utf8_general_ci;
use alunos;
create table aluno(
    id_aluno integer  auto_increment not null primary key,
    nome varchar(100) not null,
    nascimento varchar(10) not null
);
create table cursados(
    aluno integer not null,
    curso varchar(100) not null,
    data varchar(10) not null,
    foreign key (aluno) references aluno(id_aluno) on delete cascade
);
create table cursos(
    id_curso integer  auto_increment not null primary key,
    curso_ varchar(50) not null,
    duracao numeric(8,2) not null
 );

create view vw_info as
select a.id_aluno, a.nome, a.nascimento, c.aluno, c.curso, c.data, s.id_curso, s.curso_, s.duracao from aluno a
inner join cursados c on c.aluno = a.id_aluno
inner join cursos s;


LOAD DATA INFILE 'C:/Users/Deselvolvimento/Desktop/Prova-BE-30-11/docs/alunos.csv'
INTO TABLE aluno
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Deselvolvimento/Desktop/Prova-BE-30-11/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Deselvolvimento/Desktop/Prova-BE-30-11/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from aluno;
select * from cursados;
select * from cursos;
select * from vw_info;