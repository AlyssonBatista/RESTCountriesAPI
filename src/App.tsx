import { useState } from "react";
import "./App.css";
import { Button, Card, CardContent, Grid2, TextField } from "@mui/material";
import { css } from "@emotion/css";

function App() {
  const [total, setTotal] = useState(0);
  const [palavra, setpalavra] = useState("");
  function somar() {
    return setTotal(total + 1);
  }
  function normallizarTexto(texto: string) {
    return texto.trim().toLowerCase();
  }

  const cardCont = css`
    card: {
      margin-bottom: 1rem ;
    }
  `;

  return (
    <Grid2>
      <Card  style={{marginBottom: '1rem'}}>
        <CardContent>
          <h1>{total}</h1>
          <TextField
            color="primary"
            size="small"
            id="filled-basic"
            label="Filled"
            variant="standard"
          />
          <Button
            color="primary"
            size="large"
            variant="contained"
            onClick={somar}
          >
            Somar
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h1>Bônus de 100 - 20% do total:</h1>
          <label>Total</label>
          <TextField
            type="number"
            color="primary"
            size="small"
            id="filled-basic"
            label="Filled"
            variant="standard"
          />
          <Button
            color="primary"
            size="large"
            variant="contained"
            onClick={somar}
          >
            Somar
          </Button>
        </CardContent>
      </Card>
    </Grid2>
  );
}

export default App;
