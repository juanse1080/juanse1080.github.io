import { ArrowForwardIcon, Button, Typography } from "components/atoms";

export type HomeProps = {
  toContact: () => void;
};

const Home = ({ toContact }: Readonly<HomeProps>) => {
  return (
    <div className="relative h-screen flex gap-5">
      <div className="z-10 basis-2/3 flex flex-col items-start justify-center">
        <Typography component="h1" variant="h2">
          Hola. Soy Juan. <br />
          <span className="bg-gradient-to-r from-secondary-100 to-secondary-50  text-transparent bg-clip-text">
            Un desarrollador de software
          </span>
        </Typography>
        <Button
          className="group"
          onClick={toContact}
          endAdornment={
            <ArrowForwardIcon
              className="animate-slide-right group-hover:animate-none group-hover:hover:-translate-x-1/4"
              height={20}
              width={20}
            />
          }
        >
          Contacta conmigo
        </Button>
      </div>
    </div>
  );
};

export default Home;
