DO $$
BEGIN
    -- If the service_offerings table already exists, drop it
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'service_offerings') THEN
        DROP TABLE public.service_offerings;
    END IF;

    -- Create the service_offerings table
    CREATE TABLE public.service_offerings (
        id SERIAL PRIMARY KEY,
        icon TEXT NOT NULL,
        service_name TEXT NOT NULL,
        description TEXT NOT NULL,
        owner TEXT NOT NULL,
        url TEXT NOT NULL
    );

    -- Insert data into the service_offerings table
    INSERT INTO public.service_offerings (icon, service_name, description, owner, url) VALUES
    ('icon1', 'Service 1', 'This is the first service', 'Owner 1', 'http://example.com/service1'),
    ('icon2', 'Service 2', 'This is the second service', 'Owner 2', 'http://example.com/service2'),
    ('icon3', 'Service 3', 'This is the third service', 'Owner 3', 'http://example.com/service3');
    -- Add more rows as needed

EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'An error occurred: %', SQLERRM;
END $$;