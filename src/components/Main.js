import React from 'react';
import { StandardTemplate } from "@myob/myob-widgets";
import RoleButtonRow from './RoleButtonRow';

const Main = () => {
    return(
        <div
        style={{
            width: '100%',
            height: '100%',
            background: '#ebeef1',
        }}
        >
            <StandardTemplate pageHead={""}>
                <h1>Here is a title.</h1> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque consequat erat, vitae placerat orci aliquet eu. Quisque gravida posuere augue consectetur tincidunt. Aliquam ornare dapibus sapien, et scelerisque nulla gravida venenatis. Mauris venenatis ac diam vitae maximus. Curabitur vel tellus felis. Nunc aliquet nulla scelerisque mauris hendrerit, eu bibendum justo mollis. Praesent placerat orci turpis, vitae scelerisque odio aliquam id. Nullam vitae ex velit. Nullam cursus consequat nisi quis ultricies. Nam laoreet euismod arcu. Sed sed augue quis lacus pulvinar luctus. Donec vitae convallis quam. Suspendisse porta aliquet enim, id hendrerit orci viverra at. Etiam imperdiet quam felis, non semper tortor lacinia a. Suspendisse ante sem, efficitur non diam vitae, vestibulum efficitur metus.
                <br/><br/>
                Ut pharetra elit turpis. Curabitur quis tempor libero, dapibus lacinia ante. Donec vitae lorem nunc. Vivamus et nibh eu justo iaculis efficitur eget vel nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean imperdiet lacus urna, at ullamcorper dolor finibus a. Ut sed lectus at nibh facilisis volutpat quis sit amet lorem. In ullamcorper purus posuere orci semper venenatis. Sed lobortis urna a libero ultrices, non venenatis lacus pellentesque. Maecenas ornare elementum rutrum. Nullam scelerisque tortor augue, sed faucibus tortor ornare a.
                <br/><br/>
                Etiam et nibh nec lectus dapibus malesuada. Cras et pulvinar lectus. Pellentesque pellentesque pulvinar aliquam. In lectus lacus, rutrum nec nunc at, accumsan pulvinar turpis. In feugiat enim a dolor viverra, eget placerat ipsum dictum. Nulla facilisi. Aenean posuere vitae ligula imperdiet mattis. Vestibulum finibus ante quis maximus lacinia. Nullam sed ipsum a ipsum maximus suscipit id sit amet felis. Fusce velit felis, consequat maximus risus vehicula, aliquet accumsan orci.
                <br/><br/>
                Donec suscipit vehicula vehicula. Aenean rhoncus est aliquet sem blandit dignissim. Donec quam erat, commodo pulvinar rutrum a, fringilla a orci. Fusce vehicula non nisl a malesuada. In quis sollicitudin tellus, ut vehicula est. Donec eget sodales neque. Curabitur at consectetur lorem.
                <br/><br/>
                Etiam consectetur metus eu commodo pellentesque. Vestibulum rhoncus dui lacus, sit amet consequat felis efficitur eu. Nunc sit amet ante sollicitudin, tempus tellus et, blandit felis. Quisque id lectus nec enim pharetra condimentum ac a ante. Aliquam pulvinar, nunc ornare porta imperdiet, lacus diam mattis odio, vel faucibus mi nisl posuere dui. Vivamus sagittis vitae sem vel molestie. Mauris vitae velit sit amet massa mollis dignissim.
                <br/><br/>
                <h2>Please select your role to begin</h2>
                <RoleButtonRow/>
            </StandardTemplate>
        </div>
    )
}

export default Main;