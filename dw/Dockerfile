FROM mysql:8.0.16

ENV MYSQL_ROOT_PASSWORD dw_database

COPY ./dw.sql /docker-entrypoint-initdb.d/01-dw.sql
