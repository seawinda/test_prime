import React, {Component} from "react";
import "./App.css";
import Search from "./components/search/Search";

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: null,
      active: 0,
      term: ""
    };
  }

  loadData() {
    this.initialData = this.refs.textRef.innerHTML;    
    this.setState({data: this.initialData});
  }
  updateData(config) {
    this.setState(config);
    this.refs.textRef.innerHTML=config.data;
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <>
        <Search term={this.state.term} data={this.initialData} update={this.updateData.bind(this)} />
        <div ref="textRef">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tincidunt praesent semper feugiat nibh sed. Varius quam quisque id diam vel quam elementum pulvinar etiam. Etiam sit amet nisl purus in mollis nunc. Nibh nisl condimentum id venenatis a condimentum vitae. Bibendum arcu vitae elementum curabitur vitae nunc. Risus viverra adipiscing at in. Erat nam at lectus urna duis convallis convallis tellus. Ut diam quam nulla porttitor massa id neque aliquam. Morbi tempus iaculis urna id volutpat lacus laoreet non. Morbi tincidunt augue interdum velit euismod in pellentesque. Mauris sit amet massa vitae tortor condimentum lacinia quis.</p>
        <p>Eu turpis egestas pretium aenean pharetra magna ac placerat. Purus in mollis nunc sed id semper. Augue interdum velit euismod in pellentesque massa placerat. Vel quam elementum pulvinar etiam non. Sapien pellentesque habitant morbi tristique. Sodales ut eu sem integer vitae justo. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Tempor nec feugiat nisl pretium fusce id velit. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Orci eu lobortis elementum nibh tellus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Arcu vitae elementum curabitur vitae nunc. Etiam dignissim diam quis enim. A erat nam at lectus. Duis at tellus at urna. Vivamus arcu felis bibendum ut. Sit amet dictum sit amet. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Consectetur lorem donec massa sapien. At ultrices mi tempus imperdiet nulla malesuada.</p>
        <p>Sit amet nisl suscipit adipiscing bibendum. Mauris augue neque gravida in fermentum. Volutpat est velit egestas dui id ornare. Interdum velit laoreet id donec ultrices tincidunt. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Imperdiet dui accumsan sit amet. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Faucibus scelerisque eleifend donec pretium vulputate. Tellus in metus vulputate eu scelerisque felis imperdiet. Mattis aliquam faucibus purus in massa. In cursus turpis massa tincidunt dui. Elit at imperdiet dui accumsan. In ante metus dictum at tempor commodo. In tellus integer feugiat scelerisque varius morbi enim. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.</p>
        <p>Ridiculus mus mauris vitae ultricies leo. Lacus laoreet non curabitur gravida arcu ac. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Ultrices dui sapien eget mi proin sed libero enim sed. Quisque egestas diam in arcu cursus euismod quis viverra. Fusce ut placerat orci nulla. Amet aliquam id diam maecenas ultricies mi. Egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis nunc. Justo laoreet sit amet cursus sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Morbi quis commodo odio aenean sed adipiscing diam donec. Pellentesque adipiscing commodo elit at imperdiet. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris.</p>
        <p>Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Eget duis at tellus at urna condimentum mattis pellentesque. Nunc vel risus commodo viverra maecenas. Morbi non arcu risus quis varius quam. Ut consequat semper viverra nam libero justo laoreet sit. Ut aliquam purus sit amet. Tristique senectus et netus et malesuada fames ac turpis. Donec ac odio tempor orci. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Phasellus egestas tellus rutrum tellus. Sed turpis tincidunt id aliquet risus feugiat in.</p>
      </div>
    </>
    );
  }
}
