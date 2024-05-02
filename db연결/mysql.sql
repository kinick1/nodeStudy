# 현재 mysql에서 가지고 있는 리스트 조회
show databases;

# db생성
create database nodejs;

# 사용할 db선택(툴을 새로킬때마다 사용선언 필요
use nodejs;

# 테이블 생성
create table nodejs_member(
id varchar(100),
pw varchar(100),
nick varchar(100)
);

insert into nodejs_member values ('id1','pw1','nick1');

delete from nodejs_member where id = 'id1' and pw ='pw1';

select * from nodejs_member;

set sql_safe_updates=0;