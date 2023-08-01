import { useState } from "react";
import "./LibertyHeader.scss";
import images from "../LibertyHeader/icons/images.jpeg";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function () {
  const [profileData, setProfileData] = useState(false);

  return (
    <nav className="liberty__container libertyHeader">
      <section className="libertyHeader__options">
        <span className="libertyHeader__options--username"></span>

        <button
          type="button"
          className="libertyHeader__options--icon"
          onClick={() => setProfileData((prev) => !prev)}
        >
          <img src={images} alt="icon" />
        </button>
        <TextField
          id="outlined-basic"
          label="Buscar"
          variant="outlined"
          className="libertyHeader__options--imput"
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <button
          type="button"
          className="libertyHeader__options--icon--menu"
          onClick=""
        ></button>
      </section>
    </nav>
  );
}
