PGDMP         /    
            z            taskdb    14.1    14.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    16384    taskdb    DATABASE     Q   CREATE DATABASE taskdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE taskdb;
             	   bunmialao    false            ?            1259    16438    task    TABLE     d   CREATE TABLE public.task (
    id integer NOT NULL,
    title text NOT NULL,
    updated_at date
);
    DROP TABLE public.task;
       public         heap 	   bunmialao    false            ?            1259    16437    task_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.task_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.task_id_seq;
       public       	   bunmialao    false    210                       0    0    task_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.task_id_seq OWNED BY public.task.id;
          public       	   bunmialao    false    209            ?            1259    16447    tasklist    TABLE     h   CREATE TABLE public.tasklist (
    id integer NOT NULL,
    title text NOT NULL,
    updated_at date
);
    DROP TABLE public.tasklist;
       public         heap 	   bunmialao    false            ?            1259    16466    tasklist_group    TABLE     j   CREATE TABLE public.tasklist_group (
    task_id integer,
    tasklist_id integer,
    updated_at date
);
 "   DROP TABLE public.tasklist_group;
       public         heap 	   bunmialao    false            ?            1259    16446    tasklist_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tasklist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.tasklist_id_seq;
       public       	   bunmialao    false    212                       0    0    tasklist_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.tasklist_id_seq OWNED BY public.tasklist.id;
          public       	   bunmialao    false    211            p           2604    16441    task id    DEFAULT     b   ALTER TABLE ONLY public.task ALTER COLUMN id SET DEFAULT nextval('public.task_id_seq'::regclass);
 6   ALTER TABLE public.task ALTER COLUMN id DROP DEFAULT;
       public       	   bunmialao    false    210    209    210            q           2604    16450    tasklist id    DEFAULT     j   ALTER TABLE ONLY public.tasklist ALTER COLUMN id SET DEFAULT nextval('public.tasklist_id_seq'::regclass);
 :   ALTER TABLE public.tasklist ALTER COLUMN id DROP DEFAULT;
       public       	   bunmialao    false    211    212    212            s           2606    16445    task task_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.task DROP CONSTRAINT task_pkey;
       public         	   bunmialao    false    210            u           2606    16454    tasklist tasklist_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.tasklist
    ADD CONSTRAINT tasklist_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.tasklist DROP CONSTRAINT tasklist_pkey;
       public         	   bunmialao    false    212            v           1259    16474    fki_task_id    INDEX     I   CREATE INDEX fki_task_id ON public.tasklist_group USING btree (task_id);
    DROP INDEX public.fki_task_id;
       public         	   bunmialao    false    213            w           1259    16480    fki_tasklist_id    INDEX     Q   CREATE INDEX fki_tasklist_id ON public.tasklist_group USING btree (tasklist_id);
 #   DROP INDEX public.fki_tasklist_id;
       public         	   bunmialao    false    213            x           2606    16469    tasklist_group task_id    FK CONSTRAINT     ~   ALTER TABLE ONLY public.tasklist_group
    ADD CONSTRAINT task_id FOREIGN KEY (task_id) REFERENCES public.task(id) NOT VALID;
 @   ALTER TABLE ONLY public.tasklist_group DROP CONSTRAINT task_id;
       public       	   bunmialao    false    210    213    3443            y           2606    16475    tasklist_group tasklist_id    FK CONSTRAINT     ?   ALTER TABLE ONLY public.tasklist_group
    ADD CONSTRAINT tasklist_id FOREIGN KEY (tasklist_id) REFERENCES public.tasklist(id) NOT VALID;
 D   ALTER TABLE ONLY public.tasklist_group DROP CONSTRAINT tasklist_id;
       public       	   bunmialao    false    213    212    3445           