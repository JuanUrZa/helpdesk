create database DBHelpdesk;

use DBHelpdesk;

create table Usuario
(
intID int(11) primary key not null,
strNombre varchar(30) not null,
strContraseña varchar(30) not null,
blnEstado bit(2) not null,
strCorreo varchar(35) not null,
intBitacoras_Abiertas int not null
);

create table Tecnico
(
intID int(11) primary key not null,
intBitacoras_Solucionadas int not null,
foreign key (intID) references Usuario(intID)
);

create table Administrador
(
intID int(11) primary key not null,
intBitacoras_Solucionadas int not null,
foreign key (intID) references Usuario(intID)
);

create table Cliente
(
intID int(11) primary key not null ,
intBitacoras_Resueltas int not null,
foreign key (intID) references Usuario(intID)
);

create table Bitacora
(
intCodigo int(10) primary key not null auto_increment,
intCodUsuario int not null,
intCodProblema int not null,
strDiagnostico varchar(500),
dtmFecha DATETIME NOT NULL ,
blnEstado bool not null
);
alter table Bitacora add foreign key(intCodUsuario) references Usuario(intID);


create table Problema
(
intCodigo int auto_increment not null,
strDescripcion varchar(500) not null,
blnEstado bool not null,
strSolucion_Sugerida varchar(500) not null,
primary key(intCodigo)
);

alter table Bitacora add foreign key (intCodProblema) references Problema(intCodigo);