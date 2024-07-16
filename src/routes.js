import { BrowserRouter, Route, Routes, useOutletContext } from "react-router-dom";
import FormNovoVideo from "pages/FormNovoVideo";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";

function FormNovoVideoWrapper() {
    const context = useOutletContext();
    return <FormNovoVideo {...context} />;
}

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="novo-video" element={<FormNovoVideoWrapper />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;


