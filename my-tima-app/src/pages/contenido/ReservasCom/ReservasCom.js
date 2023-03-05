import React from "react";
import "../../../App.css"
import { Link } from "react-router-dom";

export function ReservasCom() {
  return (
    <div className="p-6">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
          <center>
            <img id="ten" src="https://drive.google.com/uc?export=download&id=1VkOvyLX94lxj2F8_kkvSLlOU92g4Sia7" class="card-img-top" alt=".." />
            </center>
            <div class="card-body">
              <h5 class="card-title">Tinte de Cabello</h5>
              <p class="card-text">
                tinte de cabellos con colores de su preferencia                
              </p>
              <button>Seleccionar</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Corte de cabello</h5>
              <p class="card-text">
                corte de cabellos de su preferencia
              </p>
              <button>Seleccionar</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Lacidado de Peinados</h5>
              <p class="card-text">
                laciado de cabello ondulado o enchinado
              </p>
              <button>Seleccionar</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Enchinado de cabellos</h5>
              <p class="card-text">
                enchinado de cabello y ondular cabellos 
              </p>
              <button>Seleccionar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
