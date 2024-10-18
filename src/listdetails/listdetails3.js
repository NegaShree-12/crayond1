import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// Custom styled switch component
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  "& .MuiTypography-root": {
    fontWeight: "bold",
  },
}));

const SummaryBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffe4e1", // Matching the color from the image
  padding: theme.spacing(2),
  borderRadius: "8px", // Slightly rounded corners
  marginBottom: theme.spacing(2), // Space below the summary box
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const AmenitiesItem = ({ image, title, price, dates, checked, onToggle }) => {
  return (
    <Box
      sx={{
        border: "1px solid #ddd", // Light gray border for the card
        borderRadius: "8px", // Rounded corners
        padding: "10px", // Spacing inside the box
        mb: 2, // Margin bottom for spacing between items
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // Slight shadow for depth
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid2 container alignItems="center" spacing={2}>
        <Grid2 item xs={2}>
          <img
            src={image}
            alt="Amenity"
            width={50}
            height={30}
            style={{ borderRadius: "4px" }}
          />
        </Grid2>
        <Grid2 item xs={7}>
          <Typography variant="body1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {price} &bull; {dates}
          </Typography>
        </Grid2>
        <Grid2 item xs={3} textAlign="right">
          <IOSSwitch checked={checked} onChange={onToggle} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

const AddAmenitiesDialog = ({
  open,
  onClose,
  amenities = [], // Default to an empty array if undefined
  totalAmenities,
  totalCost,
  onToggle,
}) => {
  const handleClose = () => {
    onClose();
  };

  const ScrollableBox = styled(Box)({
    maxHeight: 300, // Adjust the height as needed
    overflowY: "auto",
    marginTop: 16,
    // Custom scrollbar styles
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ccc",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#aaa",
    },
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <StyledDialogTitle>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Nunito Sans",
          }}
        >
          Add Amenities
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>

      {/* Summary box for total amenities and cost */}
      <DialogContent dividers>
        <SummaryBox>
          <Typography sx={{ fontFamily: "Nunito Sans" }} variant="h6">
            {totalAmenities} Total Amenities
          </Typography>
          <Typography
            sx={{ fontFamily: "Nunito Sans" }}
            variant="h6"
            color="error"
          >
            ${totalCost}
          </Typography>
        </SummaryBox>

        <Divider />

        {/* Scrollable Box for the list of amenities */}
        <ScrollableBox>
          {amenities && amenities.length > 0 ? (
            amenities.map((amenity, index) => (
              <AmenitiesItem
                key={index}
                image={amenity.image}
                title={amenity.title}
                price={amenity.price}
                dates={amenity.dates}
                checked={amenity.checked}
                onToggle={() => onToggle(index)}
              />
            ))
          ) : (
            <Typography>No amenities available</Typography>
          )}
        </ScrollableBox>
      </DialogContent>

      {/* Update & Save button */}
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ fontFamily: "Nunito Sans" }}
          variant="contained"
          color="primary"
          fullWidth
        >
          Update & Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddAmenitiesDialog;
