import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  InputAdornment,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test123");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    try {
      await login(email, password);
      navigate("/"); // Redirect to dashboard on successful login
    } catch (error) {
      setError("Felaktig email eller lösenord. Försök igen.");
      console.error("Login failed", error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      sx={{
        background:
          "linear-gradient(135deg, rgba(20, 110, 180, 0.7), rgba(234, 29, 44, 0.7)), url('/path-to-background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          width: 400,
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          background: "rgba(0, 0, 0, 0.7)",
          color: "#FFFFFF",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ color: "#FFFFFF" }}
        >
          Välkommen tillbaka
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{ color: "#BBBBBB", mb: 2 }}
        >
          Logga in på ditt konto
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: "#BBBBBB" }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            sx: { color: "#FFFFFF" }, // Make label text white
          }}
          sx={{
            mb: 2,
            bgcolor: "#1B1B1B",
            borderRadius: "8px",
            input: { color: "#FFFFFF" },
          }}
        />
        <TextField
          fullWidth
          label="Lösenord"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: "#BBBBBB" }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            sx: { color: "#FFFFFF" }, // Make label text white
          }}
          sx={{
            bgcolor: "#1B1B1B",
            borderRadius: "8px",
            input: { color: "#FFFFFF" },
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            backgroundColor: "#EA1D2C",
            borderRadius: "8px",
            height: "45px",
            fontSize: "1rem",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#c21825",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            },
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onClick={handleLogin}
        >
          Logga in
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 2, textAlign: "center", color: "#BBBBBB" }}
        >
          Har du inget konto?{" "}
          <Link
            to="/signup"
            style={{
              color: "#EA1D2C",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Skapa konto
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
