/* eslint-disable react/jsx-no-target-blank */
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return (
    <div className="flex items-center  w-full h-[92vh]">
      <Card className="mt-6 w-96 mx-auto ">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Params URL
          </Typography>
          <Typography>
            In url try changing user id using &quot;/&quot; after the users in
            url like this for example ➡️
            <span className="text-green-500">users/1</span>
            <br />
            <br />
            <b>what ever values to you change you may catch them below ⬇️</b>
            <br />
            <span className="text-red-500">{userid}</span>
            <br />
            <i>These are caught using useParams provided by react-router-dom</i>
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>
            <a
              href="https://reactrouter.com/en/main/hooks/use-params"
              target="_blank"
            >
              Read More
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default User;
