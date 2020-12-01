import React, { Component } from "react";
import { connect } from "react-redux";
import { getpopularTvshows } from "../../actions/tv_actions/getpopularTvshows";
import { getairingtodayTvshows } from "../../actions/tv_actions/getairingtodayTvshows";
import { gettvgenre } from "../../actions/tv_actions/getTvgenre";
import VerticalTvCarousel from "../VerticalMovieCarousel/VerticalTvCarousel";
import "../Movies/Movies.css";
import HorizontalTvCarousel from "../HorizontalCarousel/HorizontalTvCarousel";
import Footer from "../Footer/Footer";
class Tv extends Component {
    componentDidMount() {
        this.props.getpopularTvshows();
        this.props.getairingtodayTvshows();
        this.props.gettvgenre();
    }
    render() {
        const { airingtodayTvshows, popularTvshows, tvgenre } = this.props;

        return (
            <React.Fragment>
                <div className="header">
                    <VerticalTvCarousel
                        tvshows={airingtodayTvshows}
                        genre={tvgenre}
                    />
                </div>

                <div className="home-container">
                    <div className="container pb-6">
                        <HorizontalTvCarousel
                            carouselName="Popular"
                            tvshows={popularTvshows}
                            genre={tvgenre}
                        />
                        <hr className="section-separator" />
                    </div>
                </div>


                <Footer />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    popularTvshows: state.popularTvshows.popularTvshows,
    airingtodayTvshows: state.airingtodayTvshows.airingtodayTvshows,
    tvgenre: state.tvgenre.tvgenre
});
export default connect(
    mapStateToProps,
    {
        getpopularTvshows,
        getairingtodayTvshows,
        gettvgenre
    }
)(Tv);
