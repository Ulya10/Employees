import './app-filter.css'

const AppFilter = () => {
    return (
        <div class="btn-group app-filter" role="group" aria-label="Basic outlined example" >
            <button type="button" class="btn btn-info btn-outline-secondary">Все сотрудники</button>
            <button type="button" class="btn btn-light btn-outline-secondary">На повышение</button>
            <button type="button" class="btn btn-light btn-outline-secondary">ЗП больше 100р</button>
        </div>
    )
};

export default AppFilter;