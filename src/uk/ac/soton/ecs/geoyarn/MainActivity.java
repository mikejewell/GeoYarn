package uk.ac.soton.ecs.geoyarn;

import org.apache.cordova.*;
import android.os.Bundle;

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/android/index.html");
        
    }
}
