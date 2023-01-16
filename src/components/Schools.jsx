import Menu from "./Menu";

const Schools = () => {
    return (
        <>
            <Menu />
            <h1>Écoles</h1>
            <div className="ecoles">
                <div className="ecole" id="ecole1"></div>
                <div className="ecole" id="ecole2"></div>
                <div className="ecole" id="ecole3"></div>
            </div>
            
        </>
      );
}
 
export default Schools;