import { useEffect } from "react"
import { connect } from "react-redux"
import { loadProducts } from "../../store/actions"
import Group from "../group/group"
import _ from "lodash"

const Groups = ({groupsIds, loadProducts}) => {
    useEffect(() => {
        if (!groupsIds.length) loadProducts()
    }, [])

    return <div className="groups__container">
        {groupsIds && groupsIds.map(groupId => <Group idGroup={groupId} key={groupId}/>)}
    </div>
}

const mapStateToProps = (state, ownProps) => ({
    groupsIds: _.uniq(_.flatMap(state.products, product => product.G))
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadProducts: () => dispatch(loadProducts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Groups)