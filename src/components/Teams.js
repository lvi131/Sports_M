import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import "./App.css";

const teams = [
  "Aquatics",
  "Athletics",
  "Badminton",
  "Basketball",
  "Boxing",
  "Chess",
  "Cricket",
  "Football",
  "Handball",
  "Hockey",
  "Kabaddi",
  "KhoKho",
  "Squash",
  "Table Tennis",
  "Volleyball",
  "Lawn Tennis",
  "Taekwondo",
  "Weightlifting",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <ul className="teams-menu">
        {teams.map((team) => (
          <li
            class="team-names"
            button
            onClick={() => handleListItemClick(team)}
            key={team}
          >
            <a href="#">{team}</a>
          </li>
        ))}
      </ul>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(teams[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button class="btn" onClick={handleClickOpen}>
        Teams
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
