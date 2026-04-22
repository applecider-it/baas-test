CREATE TABLE IF NOT EXISTS "public"."user_posts" (
    "id" bigint NOT NULL,
    "user_id" "uuid",
    "content" "text" NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"()
);


ALTER TABLE "public"."user_posts" OWNER TO "postgres";


ALTER TABLE "public"."user_posts" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."user_posts_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


ALTER TABLE ONLY "public"."user_posts"
    ADD CONSTRAINT "user_posts_pkey" PRIMARY KEY ("id");


ALTER TABLE ONLY "public"."user_posts"
    ADD CONSTRAINT "user_posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE;


CREATE POLICY "service_role only" ON "public"."user_posts" FOR ALL TO "service_role" USING (true);


ALTER TABLE "public"."user_posts" ENABLE ROW LEVEL SECURITY;


GRANT ALL ON TABLE "public"."user_posts" TO "anon";
GRANT ALL ON TABLE "public"."user_posts" TO "authenticated";
GRANT ALL ON TABLE "public"."user_posts" TO "service_role";

GRANT ALL ON SEQUENCE "public"."user_posts_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."user_posts_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."user_posts_id_seq" TO "service_role";

