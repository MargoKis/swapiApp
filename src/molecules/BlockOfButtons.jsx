import React from "react";
import { Link } from "react-router-dom";
import Button from '../atoms/Button'

const BlockOfButtons = () => (
  <div className="flex flex-row bg-gray">
    <Link to="/people">
      <Button nameButton="people">People</Button>
    </Link>
    <Link to='/starships'>
      <Button nameButton="starships">Starships</Button>
    </Link>
    <Link to='/planets'>
      <Button nameButton="planets">Planets</Button>
    </Link>
  </div>
);

export default BlockOfButtons;
