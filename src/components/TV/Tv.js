import React, { Component } from "react";
import { connect } from "react-redux";
import { getairingtodayTvshows } from "../../actions/tv_actions/getairingtodayTvshows";
import { gettvgenre } from "../../actions/tv_actions/getTvgenre";
import VerticalTvCarousel from "../VerticalMovieCarousel/VerticalTvCarousel";
import "../Movies/Movies.css";
import Footer from "../Footer/Footer";
class Tv extends Component {
    componentDidMount() {
        this.props.getairingtodayTvshows();
        this.props.gettvgenre();
    }
    render() {
        const { airingtodayTvshows,tvgenre } = this.props;

        return (
            <React.Fragment>
                <div className="header">
                    <VerticalTvCarousel
                        tvshows={airingtodayTvshows}
                        genre={tvgenre}
                    />
                </div>


                <Footer />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    airingtodayTvshows: state.airingtodayTvshows.airingtodayTvshows,
    tvgenre: state.tvgenre.tvgenre
});
export default connect(
    mapStateToProps,
    {
        getairingtodayTvshows,
        gettvgenre
    }
)(Tv);
